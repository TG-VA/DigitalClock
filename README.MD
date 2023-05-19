# Digital Clock 🕒

[![https://i.imgur.com/zguXJXg.gif](https://i.imgur.com/zguXJXg.gif "https://i.imgur.com/zguXJXg.gif")](https://i.imgur.com/zguXJXg.gif "https://i.imgur.com/zguXJXg.gif")

### 📄 Content 
In this project we develop a digital clock that gives us the date and time of the device which is being used. The main concepts that we put into practice in this project are [SETTIMEOUT](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout "SETTIMEOUT") and [SETINTERVAL](https://developer.mozilla.org/en-US/docs/Web/API/setInterval "SETINTERVAL") apart from the following:

- [setTimeout() global function](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout "setTimeout() global function")
- [setInterval() global function](https://developer.mozilla.org/en-US/docs/Web/API/setInterval "setInterval() global function")
- [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals "Template literals (Template strings)")
- [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")
- [Date components and time zones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date "Date components and time zones")
- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions "Arrow function expressions")

Next we can see that 2 strings are declared in which the days of the week are declared and in the other one the months of the year in Spanish. Then, using the "date" methods we insert using "Template literals" the day and the corresponding month on the screen. We also use the setInterval together with an arrow function to obtain the current time of the device and to be able to print it on the screen.

```javascript
let daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

showDate.innerHTML = `${daysWeek[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`

setInterval(() =>{
    let hour = new Date();
    showHour.innerHTML = hour.toLocaleTimeString();
}, 1000);
```



<h3 align="left">Languages and Tools</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

### ✒️  Autor
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.


#  Reloj Digital 🕒
[![https://i.imgur.com/zguXJXg.gif](https://i.imgur.com/zguXJXg.gif "https://i.imgur.com/zguXJXg.gif")](https://i.imgur.com/zguXJXg.gif "https://i.imgur.com/zguXJXg.gif")

### 📄 Introducción

En este proyecto desarrollamos un reloj digital que nos da la fecha y la hora del dispositivo el cual se este utilizando. Los principales conceptos que ponemos en práctica en este proyecto son [SETTIMEOUT](https://developer.mozilla.org/en-US/docs/Web/API/setInterval "SETTIMEOUT") y [SETINTERVAL](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout "SETINTERVAL") aparte de los siguientes:

- [setTimeout() global function](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout "setTimeout() global function")
- [setInterval() global function](https://developer.mozilla.org/en-US/docs/Web/API/setInterval "setInterval() global function")
- [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals "Template literals (Template strings)")
- [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")
- [Date components and time zones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date "Date components and time zones")
- [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions "Arrow function expressions")

A continuación podemos observar que se declaran 2 cadenas en las cuales se declaran los días de la semana y en la otra los meses del año en español. Seguidamente, mediante los métodos "date" insertamos usando "Template literals" el día y el mes correspondiente en pantalla. Igual utilizamos el setInterval junto con una arrow function para obtener la hora actual del dispositivo y poder imprimirla en pantalla. 

```javascript
let daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

showDate.innerHTML = `${daysWeek[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`

setInterval(() =>{
    let hour = new Date();
    showHour.innerHTML = hour.toLocaleTimeString();
}, 1000);
```

<h3 align="left">Tecnologías y herramientas</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

### ✒️  Autor
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.
