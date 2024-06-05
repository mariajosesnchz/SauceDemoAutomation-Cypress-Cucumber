# Proyecto de Automatización de Pruebas para Sauce Demo

Este proyecto contiene una suite de pruebas automatizadas utilizando Cypress y Cucumber para la página [Sauce Demo](https://www.saucedemo.com/).

## Descripción

La suite de pruebas automatiza la verificación de varias funcionalidades de la página Sauce Demo, asegurando que la aplicación funcione correctamente. Las pruebas están escritas en Gherkin y ejecutadas usando Cypress.

## Requisitos

- Node.js (v12 o superior)
- npm (v6 o superior)

## Instalación

1. Clona el repositorio a tu máquina local:
    
    git clone https://github.com/mariajosesnchz/SauceDemoAutomation-Cypress-Cucumber.git
    

2. Navega al directorio del proyecto:
    
    cd proyecto-automatizacion-saucedemo
    

3. Instala las dependencias:
    
    npm install
    

## Estructura del Proyecto

- `cypress/`
  - `e2e/`: Archivos de pruebas en formato Gherkin.
  - `fixtures/`: Datos de prueba.
  - `reports/`: Reportes de ejecución de pruebas.
  - `screenshots/`: Capturas de pantalla tomadas durante la ejecución de pruebas.
  - `support/`: Comandos y configuraciones de soporte de Cypress.
- `node_modules/`: Dependencias del proyecto.
- `cypress.config.js`: Configuración de Cypress.
- `package-lock.json`: Archivo de bloqueo de dependencias.
- `package.json`: Archivo de configuración del proyecto.
- `README.md`: Este archivo.

### Ejecutar Pruebas

Para ejecutar las pruebas en modo interactivo (Cypress Test Runner):

npx cypress open
