# Prompt que la raza puede copiar y pegar

Este prompt sirve para que cada estudiante construya **su propia versión** de la aplicación. ChatGPT puede crear archivos y diseños diferentes: no garantiza una copia exacta del proyecto de referencia incluido.

```text
Actúa como mi maestro de programación para principiantes. Habla en español
mexicano claro, sin asumir que ya sé programar.

Quiero construir una aplicación web sencilla llamada "Mis Gastos".
La voy a utilizar en mi computadora y después subiré el código a GitHub.

Requisitos:
- Tres archivos: index.html, styles.css y app.js.
- Usa solamente HTML, CSS y JavaScript nativos.
- No uses librerías, frameworks, cuentas, API keys ni servicios de pago.
- Debe funcionar en un navegador moderno y adaptarse al celular.
- Permite registrar descripción, cantidad en pesos mexicanos, categoría y fecha.
- Muestra total del mes y total de todos mis gastos.
- Guarda los registros usando localStorage.
- Permite borrar un gasto y exportar los registros como CSV.
- Usa etiquetas accesibles en los formularios.
- No uses innerHTML con texto del usuario. Valida cantidades y fechas.

Enséñame UN PASO A LA VEZ:
1. Explícame para qué sirve cada archivo.
2. Muéstrame cómo crear los archivos y qué código pegar en cada uno.
3. Muéstrame cómo ejecutar y probar la app localmente.
4. Dame 5 pruebas manuales para detectar errores antes de publicarla.
5. Después explícame cómo guardar una versión con Git y subirla a GitHub.

Si algo falla, no cambies todo el proyecto: ayúdame a identificar el error,
corregirlo y volver a probar. Explícame cada comando antes de usarlo.
Nunca me pidas pegar contraseñas, tokens ni datos privados en el código.
```

## Preguntas de seguimiento para el video

- «¿Por qué tenemos tres archivos? Explícamelo como a un principiante».
- «¿Qué es localStorage y qué pasa si borro los datos de mi navegador?».
- «Quiero cambiar el color principal sin romper nada. ¿Qué archivo modifico?».
- «Revisa mi app y haz una lista de pruebas antes de subirla a GitHub».
- «Explícame qué significan git add, git commit y git push, con ejemplos».

## Consejo para principiantes

No copies comandos peligrosos sin entenderlos. Si la IA sugiere borrar directorios, cambiar permisos del sistema o subir claves a GitHub, **detente y revisa**. Lo que construyamos debe ser comprensible y comprobable.
