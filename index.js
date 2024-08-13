   // Establecer la fecha objetivo
   const countdownDate = new Date("August 13, 2024 18:00:00").getTime();

   // Actualizar el contador cada segundo
   const x = setInterval(function() {

       // Obtener la fecha y hora actual
       const now = new Date().getTime();

       // Calcular la diferencia de tiempo entre la fecha objetivo y ahora
       const distance = countdownDate - now;

       // Calcular días, horas, minutos y segundos restantes

       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

       // Mostrar el resultado en el elemento con id="countdown"
       document.getElementById("countdown").innerHTML = hours + "h "
       + minutes + "m " + seconds + "s ";

       // Si la cuenta regresiva ha terminado, mostrar un mensaje
       if (distance < 0) {
           clearInterval(x);
           document.getElementById("countdown").innerHTML = "¡La cuenta regresiva ha terminado!";
       }
   }, 1000);