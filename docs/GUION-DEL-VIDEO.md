# SoloBuilds — Episodio 01: plan de grabación

## Título candidato

**«No sabes programar? Haz tu PRIMERA APP GRATIS con ChatGPT + GitHub (paso a paso)»**

Título alternativo: «Tu primera aplicación desde cero: IA + Git + GitHub, explicado para la raza»

## Promesa del episodio

Al terminar, una persona sin experiencia puede abrir una aplicación en su navegador, registrar un gasto de prueba, explicar qué hacen Git y GitHub y guardar la primera versión de su código. La instalación de programas o resolución de problemas de acceso puede alargar el proceso.

**Duración orientativa: 25–30 minutos si Git ya está instalado y la cuenta GitHub está lista.** Si no, incluir un enlace a un video extra de preparación.

## Guion con tiempos de referencia

### 00:00–00:45 — Gancho con resultado real

[PANTALLA: la app terminada; añade un gasto de 85 pesos y observa cómo cambia el total.]

«Banda, esta aplicación la puedes hacer tú. No necesitas pagar una suscripción, ni tener un servidor, ni ser ingeniero. Hoy vamos a usar ChatGPT para crear una app, Git para guardar versiones y GitHub para compartirla. Lo importante: no vamos a confiar a ciegas en la IA; vamos a probar todo.»

### 00:45–03:00 — Qué vamos a construir

[PANTALLA: muestra formulario, total mensual y lista de gastos; exporta CSV.]

«Esta va a ser nuestra app de gastos. Se queda en tu navegador. Nada de subir tu información a una empresa. Y si la quieres cambiar, el código es tuyo.»

[NOTA: aclarar que el almacenamiento local se puede borrar y el CSV es el respaldo.]

### 03:00–06:00 — Git, GitHub y ChatGPT sin enredos

[PANTALLA: tres palabras en pantalla, un ejemplo concreto para cada una.]

«ChatGPT me ayuda a escribir y explicar el código. Git guarda el historial de versiones. GitHub es el sitio donde compartimos el repositorio. Son cosas distintas.»

Mostrar carpeta con `index.html`, `styles.css`, `app.js`. Dar analogía simple: HTML = estructura, CSS = presentación, JavaScript = comportamiento.

### 06:00–12:00 — Pedimos el código a ChatGPT

[PANTALLA: copiar el prompt del documento `PROMPT-CHATGPT.md`.]

«Mira que no solo pedimos ‘hazme una app’. Especificamos qué necesitamos, qué no queremos y cómo la vamos a probar.»

Mostrar la respuesta real de ChatGPT. Crear o revisar archivos, explicando dónde pegar cada fragmento. Si una respuesta se corta, pedir que continúe un archivo a la vez.

### 12:00–18:00 — La prueba real

[PANTALLA: navegador.]

1. Agregar «Tacos» por $85.00 MXN.
2. Agregar «Camión» por $15.00 MXN.
3. Confirmar total de $100.00 MXN.
4. Recargar página y comprobar que los gastos siguen allí.
5. Borrar «Camión» y confirmar total de $85.00 MXN.
6. Exportar CSV y verificarlo en un editor u hoja de cálculo.

«Que la IA diga que funciona no significa que funciona. Nosotros lo acabamos de probar.»

### 18:00–22:00 — Personalizar algo sin miedo

[PANTALLA: cambiar el texto del título de la app o un color en `styles.css`.]

«No necesitas entender cada línea de golpe. Hoy vamos a entender un cambio pequeño: hacerlo, ver el resultado y saber cómo deshacerlo.»

### 22:00–27:00 — Git y GitHub

[PANTALLA: terminal dentro de la carpeta del proyecto.]

Comandos básicos:

```bash
git init -b main
git add .
git commit -m "Mi primera app de gastos"
```

Crear repositorio vacío en GitHub usando el navegador. Luego:

```bash
git remote add origin https://github.com/TU_USUARIO/mi-app-de-gastos.git
git push -u origin main
```

«Git guarda nuestro avance y GitHub nos permite compartirlo. Y si te equivocas, tenemos un historial.»

Si aparece un paso de autenticación, explicar cómo usar login seguro con navegador o GitHub CLI, nunca poner una contraseña en el video.

### 27:00–29:00 — Cierre con tarea

[PANTALLA: repositorio y app.]

«Tu reto: cambia el nombre y el color de tu app. Haz tu propio commit y comparte el enlace del repositorio, **no tus gastos personales**. En el siguiente episodio vamos a usar ramas de Git para experimentar sin echar a perder la versión que ya funciona.»

Llamado a la acción: «Si quieres aprender a crear tus propias herramientas, aquí vamos paso por paso, en español y con pruebas de verdad.»

## Plan de grabación

- Abrir proyecto ya probado en el navegador y preparar datos de ejemplo ficticios.
- Ocultar notificaciones, correos, contraseñas, claves, tokens y carpetas privadas antes de grabar.
- Grabar pantalla 1080p, 30 fps; usar micrófono claro o narración posterior.
- Aumentar la letra de editor y terminal (ideal para celulares).
- Mantener edición sencilla: zoom donde haga falta, subtítulos de comandos y cortes de espera.
- Mostrar los errores reales y su corrección cuando ayuden a aprender.
- No fingir que un solo prompt genera siempre exactamente el mismo resultado.

## Dos Shorts derivados

1. **«La diferencia entre Git y GitHub en 20 segundos»**: Git guarda versiones; GitHub comparte el repositorio.
2. **«Mira: hice una app de gastos gratis con IA»**: captura de formulario → monto total → código → GitHub.

## Descripción para YouTube (modelo)

En este video hacemos una aplicación de gastos en español utilizando ChatGPT, HTML, CSS, JavaScript, Git y GitHub. Te enseño cómo probarla, cambiarla y guardar tu primera versión.

Código gratis: [PON AQUÍ EL ENLACE A TU REPOSITORIO PUBLICADO]

Capítulos: [AGREGA LAS MARCAS DE TIEMPO FINALES]

Nota: tus registros se guardan únicamente en el navegador. Haz respaldos si lo vas a usar con datos reales. No compartas contraseñas, tokens ni información privada en tus repositorios.

#ChatGPT #GitHub #ProgramacionDesdeCero
