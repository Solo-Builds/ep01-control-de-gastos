"use strict";

// SoloBuilds — Proyecto 01: gastos guardados en este navegador.
// Sin cuentas, servidores, dependencias ni servicios de terceros.
const STORAGE_KEY = "solobuilds-mis-gastos-v1";
const CATEGORIES = ["Comida", "Transporte", "Casa", "Salud", "Entretenimiento", "Otros"];
const SYMBOLS = { Comida: "C", Transporte: "T", Casa: "H", Salud: "+", Entretenimiento: "E", Otros: "·" };
const money = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" });
const dayLabel = new Intl.DateTimeFormat("es-MX", { day: "numeric", month: "short", year: "numeric" });
const monthLabel = new Intl.DateTimeFormat("es-MX", { month: "long", year: "numeric" });
const $ = (id) => document.getElementById(id);
const form = $("expense-form");
const monthFilter = $("month-filter");
const toast = $("toast");
let expenses = loadExpenses();
let toastTimer;

function localDateISO(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function validDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00`);
  return !Number.isNaN(date.getTime()) && localDateISO(date) === value;
}

function loadExpenses() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(raw)) return [];
    return raw.filter((item) => item && typeof item.id === "string" &&
      typeof item.description === "string" && item.description.length <= 80 &&
      Number.isSafeInteger(item.cents) && item.cents > 0 &&
      CATEGORIES.includes(item.category) && validDate(item.date));
  } catch {
    return [];
  }
}

function saveExpenses() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    return true;
  } catch {
    showToast("No se pudo guardar: revisa el almacenamiento del navegador.");
    return false;
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3500);
}

function render() {
  const currentMonth = localDateISO().slice(0, 7);
  const thisMonthTotal = expenses.filter((item) => item.date.startsWith(currentMonth))
    .reduce((sum, item) => sum + item.cents, 0);
  const allTotal = expenses.reduce((sum, item) => sum + item.cents, 0);
  $("month-total").textContent = money.format(thisMonthTotal / 100);
  $("overall-total").textContent = money.format(allTotal / 100);
  $("record-count").textContent = String(expenses.length);
  $("current-month-label").textContent = monthLabel.format(new Date(`${currentMonth}-15T12:00:00`));

  const selected = monthFilter.value;
  const visible = expenses.filter((item) => !selected || item.date.startsWith(selected))
    .sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
  const list = $("expense-list");
  list.replaceChildren();

  if (visible.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    const symbol = document.createElement("span");
    symbol.className = "empty-icon";
    symbol.textContent = "↗";
    symbol.setAttribute("aria-hidden", "true");
    const title = document.createElement("strong");
    title.textContent = selected ? "No hay gastos en ese mes" : "Todavía no hay movimientos";
    const help = document.createElement("p");
    help.textContent = selected ? "Prueba con otro mes o selecciona «Ver todos»." : "Agrega tu primer gasto y aparecerá aquí.";
    empty.append(symbol, title, help);
    list.append(empty);
  } else {
    visible.forEach((item) => {
      const row = document.createElement("article");
      row.className = "transaction";
      const icon = document.createElement("span");
      icon.className = "category-icon";
      icon.textContent = SYMBOLS[item.category];
      icon.setAttribute("aria-hidden", "true");
      const main = document.createElement("div");
      main.className = "transaction-main";
      const name = document.createElement("p");
      name.className = "transaction-name";
      name.textContent = item.description; // textContent evita inyectar HTML del usuario
      const sub = document.createElement("p");
      sub.className = "transaction-sub";
      sub.textContent = `${item.category} · ${dayLabel.format(new Date(`${item.date}T12:00:00`))}`;
      main.append(name, sub);
      const amount = document.createElement("strong");
      amount.className = "transaction-amount";
      amount.textContent = money.format(item.cents / 100);
      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "delete-button";
      deleteButton.textContent = "×";
      deleteButton.setAttribute("aria-label", `Borrar gasto: ${item.description}`);
      deleteButton.addEventListener("click", () => removeExpense(item.id));
      row.append(icon, main, amount, deleteButton);
      list.append(row);
    });
  }
  $("filtered-count").textContent = `${visible.length} ${visible.length === 1 ? "movimiento" : "movimientos"}`;
}

function removeExpense(id) {
  const oldExpenses = expenses;
  expenses = expenses.filter((item) => item.id !== id);
  if (!saveExpenses()) { expenses = oldExpenses; return; }
  render();
  showToast("Gasto eliminado.");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const description = $("description").value.trim();
  const amount = Number($("amount").value);
  const cents = Math.round(amount * 100);
  const date = $("date").value;
  const category = $("category").value;
  if (!description || !Number.isFinite(amount) || amount <= 0 || amount > 100000000 ||
      !Number.isSafeInteger(cents) || !validDate(date) || !CATEGORIES.includes(category)) {
    showToast("Revisa los datos: descripción, monto, categoría y fecha.");
    return;
  }
  const record = {
    id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`,
    description, cents, category, date,
  };
  expenses = [record, ...expenses];
  if (!saveExpenses()) { expenses.shift(); return; }
  form.reset();
  $("date").value = localDateISO();
  $("description").focus();
  render();
  showToast("¡Gasto guardado!");
});

monthFilter.addEventListener("change", render);
$("clear-filter").addEventListener("click", () => { monthFilter.value = ""; render(); });

// Mitiga fórmulas maliciosas cuando alguien abre el CSV en una hoja de cálculo.
function csvCell(value) {
  let text = String(value);
  if (/^\s*[=+\-@]/.test(text)) text = `'${text}`;
  return `"${text.replaceAll('"', '""')}"`;
}

$("export-button").addEventListener("click", () => {
  const selected = monthFilter.value;
  const visible = expenses.filter((item) => !selected || item.date.startsWith(selected))
    .sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
  if (visible.length === 0) { showToast("Primero registra un gasto para exportarlo."); return; }
  const lines = ["Fecha,Descripcion,Categoria,Monto_MXN", ...visible.map((item) =>
    [item.date, item.description, item.category, (item.cents / 100).toFixed(2)].map(csvCell).join(","))];
  const blob = new Blob(["\uFEFF", lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mis-gastos${selected ? `-${selected}` : ""}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("Archivo CSV descargado.");
});

$("date").value = localDateISO();
render();
