let showDate = document.querySelector('#date');
let showHour = document.querySelector('#clock');

let date = new Date();

let daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

showDate.innerHTML = `${daysWeek[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`

setInterval(() =>{
    let hour = new Date();
    showHour.innerHTML = hour.toLocaleTimeString();
}, 1000);