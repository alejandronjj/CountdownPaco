const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

//Fecha a futuro
const countdownDate= new Date('Aug 25, 2022 00:00:00').getTime();

let interval= setInterval(function(){
    //obtener fecha actual en milisegundos
    const now=new Date().getTime();
    
    
    //obtener diferencia de fechas
    let distance=countdownDate-now;
    
    //Calculos a dias-horas-minutos-segundos
    //math.floor redondea
    let days=Math.floor(distance/(1000*60*60*24))//convierte milisegundos a días
    let hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    let minutes=Math.floor((distance%(1000*60*60))/(1000*60))
    let seconds=Math.floor((distance%(1000*60))/(1000))

    //Pasando resultados a HTML
    $days.innerHTML=days;
    $hours.innerHTML=hours;
    $minutes.innerHTML=minutes;
    $seconds.innerHTML=('0'+seconds).slice(-2);//solo los dos dígitos
    
    
    //cuando llegue a 0
    if (distance<0){
        clearInterval(interval)
        $finalMessage.style.transform='translateY(0)';
    }

}, 1000);