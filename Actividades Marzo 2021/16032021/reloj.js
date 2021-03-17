(function(){
    let actualizarHora = function(){
        let fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();


        let pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes'),
			pYear = document.getElementById('year');

        //Obtenemos el dia de la semana
        let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diaSemana];

        //Obtener el dia del mes
        pDia.textContent = dia;

        //Obtenemos el mes
        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if(horas >= 12){
            horas = horas - 12;
            ampm = 'PM';
        }else{
            ampm = 'AM';
        }

        if(horas < 10){horas = '0' + horas;}
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if(minutos < 10){minutos = '0' + minutos;}
        if(segundos < 10){segundos = '0' + segundos;}
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };
    actualizarHora();
    let intevalo = setInterval(actualizarHora, 1000);
}());