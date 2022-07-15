# GraficasApp - Angular

El proyecto fue elaborado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.3.3.
## **Funcionalidad**

Esta aplicación presenta pequeños ejemplos sobre el uso de gráficas de ng2 chart en Angular.

Se puede visualizar gráficas de tipo:

- barra
- dona (con información etática y dinámica)
- dona con peticón http.

## **Temas** ##

Este es un breve listado de los temas fundamentales:

- gráficas de ng2 chart
- operador map de RxJS
- clases de bootstrap
- peticiones http


**Tecnologías utilizadas:**

- Angular
- Bootstrap
- ng2 Chart
- JSON Server


<br>

## **JSON SERVER** 
https://www.npmjs.com/package/json-server

Es un paquete de node que permite tener rápidamente un backend para crear prototipos, provee una API REST falsa completa sin codificar nada. 

Para instalarlo debe utilizar el comando

```
npm install -g json-server
```

Se hizo uso en la sección "Dona Http" especificamente para obtener los datos sobre el número de usuarios  en las distintas redes sociales. Estos datos se encuentra en la base de datos `db.json`. La base de datos fue colocada en la carpeta **assets**

Levantar el JSON Server con el comando `json-server --watch db.json`

<br>

## **Aplicación Netlify**


La aplicación se encuentra desplegada en:



La graficá *Dona Http* no funciona en el sitio debido a que se debe desplegar el backend. Si se desea observarla, deberá descargar y ejecutar el proyecto levantando el backend también. 

## **Recomendaciones**

<br>

- Recuerden reconstruir los módulos de Node con `npm install`

- Para correr el servidor de desarrollo ejecute `ng serve -o`. La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen.

- Para correr el backend de prueba dirijase al directorio donde se encuentra el archivo `db.json` y ejecute el comando `json-server --watch db.json`

- Si desea compilar el proyecto ejecute `ng build`.

