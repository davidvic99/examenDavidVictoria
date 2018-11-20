//La gran zona de variables

tiempo = Array();
var my = 0; // Variable para la peor Vuelta
var my2 = Infinity; //Variable para la mejor vuelta
var suma = 0;


function peorResultado(a,b) {

        for (let i = 0; i < a.length; i++) {
               if(a[i] > b){
                   b = a[i]
                    
               }
               
           }
       return b;
}

function mejorResultado(a,c) {

    for (let i = 0; i < a.length; i++) {
           if(a[i] < c){
               c = a[i]
           }
           
       }
   return c;
}

function mediaTiempo(a,d) {
    for (let i = 0; i < a.length; i++) {
        d = d + a[i];
        
    }
   d = d/a.length;
   return d;     
}







//Zona de while fantastico

while(true){

    tmp = prompt("Tiempo de la vuelta.")
        if (tmp < 0) {
            alert("Tienes que introducir un numero mayor que 0");                    
        }else if(tmp == "SALIR"){
                alert("Saliste");
                break;
            }
            else{
                if(tmp>0){
                tmp=parseInt(tmp)
                alert("Memorizado")
                tiempo.push(tmp);
                
    
            }else{
                alert("Necesito un numero");
            }
        }


}

//Zona de ejecucion

peorResultado = peorResultado(tiempo,my);
mejorResultado = mejorResultado(tiempo,my2);
mediaResultados = mediaTiempo(tiempo,suma);

console.log(`El mejor tiempo ha sido ${mejorResultado}` );
console.log(`El peor tiempo ha sido ${peorResultado}`);
console.log(`La media del tiempo de las vueltas ha sido ${mediaResultados}`);

