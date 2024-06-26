# ReactApp Pro

## Descripción
ReactApp Pro es una aplicación web desarrollada con React que proporciona una plataforma de gestión de proyectos. Permite a los usuarios crear, editar y administrar proyectos, así como asignar tareas a miembros del equipo y realizar seguimiento del progreso.

## Objetivo
El objetivo de ReactApp Pro es facilitar la gestión de proyectos y la colaboración en equipo mediante una interfaz intuitiva y funcionalidades avanzadas.

## Fecha Actualización
17 de junio de 2024

## Tabla de Contenidos
- [HUs](#hus)
- [Instalación](#instalación)
- [Documentación Técnica](#documentación-técnica)
  - [Diagramas](#diagramas)
  - [Arquitectura del Proyecto](#arquitectura-del-proyecto)
  - [Stack](#stack)
  - [Funcionalidades (Uso)](#funcionalidades-uso)
- [Entorno Producción](#entorno-producción)
  - [Ubicación del Proyecto en Servidor](#ubicación-del-proyecto-en-servidor)
  - [Manual de Despliegue](#manual-de-despliegue)
- [Proyectos Relacionados](#proyectos-relacionados)
- [Referencias y Enlaces Adicionales](#referencias-y-enlaces-adicionales)

## HUs
1. [**HU-001**: Como usuario, quiero poder crear un nuevo proyecto para organizar mis tareas.](https://link.com)
2. [**HU-002**: Como usuario, quiero poder asignar tareas a los miembros del equipo para gestionar mejor el trabajo.](https://link.com)
3. [**HU-003**: Como administrador, quiero poder ver el progreso de los proyectos en un dashboard.](https://link.com)

## Instalación
### Requisitos Previos
- Node.js >= 14.x
- npm >= 6.x

### Instrucciones de Instalación
```bash
git clone https://github.com/usuario/reactapp-pro.git
cd reactapp-pro
npm install
```
## Documentación Técnica
### Diagramas
<img src="https://www.gliffy.com/sites/gliffy/files/image/2020-06/uml_2.png" width="600">

### Arquitectura del Proyecto
```css
reactapp-pro/
│   README.md
│   package.json
│
└───src/
    ├───components/
    ├───containers/
    ├───services/
    ├───utils/
    ├───views/
    └───styles/
```
### Stack
|Item |Tecnología|
|------|-----|
|**Frontend**|React, Redux|
|**Estilos**|CSS, SASS|
|**Herramientas**| Babel, Webpack|

### Funcionalidades (Uso)
-   **Creación de Proyectos**: Permite crear y gestionar proyectos.
-   **Asignación de Tareas**: Asigna tareas a los miembros del equipo.
-   **Dashboard de Progreso**: Visualiza el progreso de los proyectos en tiempo real.

## Entorno Producción
### Ubicación del Proyecto en Servidor

-   **Servidor de Producción**: `https://production.reactapp-pro.com`
-   **Servidor de Pruebas**: `https://staging.reactapp-pro.com`
-   **Máquina/Servidor**: `Máquina virtual Azure mqw-z3`

### Manual de Despliegue
1. Configurar las variables de entorno en el servidor:
	```bash
	REACT_APP_API_URL=https://api.reactapp-pro.com
	```
2. Compilación de la aplicación:
	```bash
	npm run build
	```
3. Desplegar los archivos estáticos en el servidor web:
	```bash
	cp -R build/* /var/www/reactapp-pro
	```
## Proyectos Relacionados
|Proyecto|Relación|Repo|
|---|---|---|
|Proyecto R1|Suministra endpoints API|https://github.com/RepoIdico/proyecto-r1|
|Proyecto R2|Bodega de datos R2|https://github.com/RepoIdico/bodega-r3|

