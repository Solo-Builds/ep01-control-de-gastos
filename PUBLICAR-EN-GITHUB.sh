#!/usr/bin/env bash
# SoloBuilds EP01 — Publica el contenido de ESTA carpeta en un nuevo repositorio público.
# Requiere Git + GitHub CLI ('gh') y autorización de la organización Solo-Builds.
# No borra repositorios ni modifica repositorios existentes.
set -euo pipefail

ORG="Solo-Builds"
REPO="ep01-control-de-gastos"
TARGET="$ORG/$REPO"
cd "$(dirname "${BASH_SOURCE[0]}")"

for program in git gh; do
  if ! command -v "$program" >/dev/null 2>&1; then
    printf 'Falta instalar %s. No se realizó ninguna publicación.\n' "$program" >&2
    exit 1
  fi
done

if ! gh auth status >/dev/null 2>&1; then
  echo 'Inicia sesión con: gh auth login' >&2
  exit 1
fi

# Evita alterar una copia que ya tenga historial o un remote inesperado.
if [ -d .git ]; then
  echo 'Esta carpeta ya tiene un repositorio Git. No haré cambios automáticos.' >&2
  exit 1
fi

# El script solo crea un repositorio NUEVO con este nombre.
if gh repo view "$TARGET" >/dev/null 2>&1; then
  echo "Ya existe https://github.com/$TARGET; no haré cambios automáticos." >&2
  exit 1
fi

if [ -z "$(git config user.name || true)" ] || [ -z "$(git config user.email || true)" ]; then
  echo 'Configura tu alias y correo de Git antes de publicar:' >&2
  echo 'git config --global user.name "Tu alias"' >&2
  echo 'git config --global user.email "tu-correo-verificado@example.com"' >&2
  exit 1
fi

node_check='sin Node.js; comprobación de sintaxis omitida'
if command -v node >/dev/null 2>&1; then
  node --check app.js
  node_check='JavaScript: sintaxis comprobada'
fi

printf 'Preparando %s como repositorio público. %s\n' "$TARGET" "$node_check"
git init -b main
git add README.md LICENSE .gitignore index.html styles.css app.js docs PUBLICAR-EN-GITHUB.sh
git commit -m 'EP01: publica Mis Gastos y tutorial de ChatGPT, Git y GitHub'
gh repo create "$TARGET" --public \
  --description 'EP01 de SoloBuilds: crea una app de gastos gratis con ChatGPT, Git y GitHub' \
  --source=. --remote=origin --push

echo
echo "Publicado: https://github.com/$TARGET"
echo 'Siguiente paso opcional: habilita Settings > Pages > Deploy from a branch > main > /(root).'
