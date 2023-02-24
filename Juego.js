
const per= parseInt(prompt("Biembenidos al jugo 'CHISPITAS Y MARIPOSAS' \n Digite cuantos jugadores son?"))
for (let i = 0; i < per; i++){ 
    let nom;  
    let jug = per;
    let u = jug;
    if (u == per) {
        nom = prompt(`Digite el nombre del jugador # ${i}`);   
    }  
    let ale = Math.floor(Math.random(1)*100) ; 
    let inte;
    let bucle;
    let acu=0
    while (true){        
                inte = parseInt(prompt(`Intento Digite un numero de 1 a 100`));
               if (inte < ale) {
                    console.log(`Es un numero mayor`);
                }else if (inte > ale) {
                    console.log(`Es un numero menor`);
                }else{
                    
                    console.log(`${nom} TERMINASTE con ${acu} intentos`);
                    break
                }
                acu++
        }      
}2