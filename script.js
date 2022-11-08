
/* window.addEventListener('load', function() {
}) */

const tiempoDeCarga = 5000;
            
            function animarBarra() {
                // Seleccionamos el elemento barra
                let elem1 = document.getElementById("barra1");
                let elem2 = document.getElementById("barra2");
                let elem3 = document.getElementById("barra3");
                let elem4 = document.getElementById("barra4");
                
                // Inicializamos el progreso en 0, para asegurarnos
                // que siempre arranque desde el principio
                let width = 0;
                
                // Calculamos el progreso en base al tiempo total de carga,
                const progresoSobreTiempoTotal = tiempoDeCarga / 300;
                
                // Creamos un intervalo que se repita en el tiempo que calculamos
                // para ir incrementando el progreso.
                let id1 = setInterval(incrementarProgreso1, progresoSobreTiempoTotal);
                let id2 = setInterval(incrementarProgreso2, progresoSobreTiempoTotal);
                let id3= setInterval(incrementarProgreso3, progresoSobreTiempoTotal);
                let id4 = setInterval(incrementarProgreso4, progresoSobreTiempoTotal);
                
                function incrementarProgreso1() {
                    // Si el progreso esta completo, detenemos el programa
                    if (width >= 70) {
                    clearInterval(id1);
                    } else {
                    width++;
                
                    // Modificamos el DOM, para impactar el nuevo progreso.
                    elem1.style.width = width + "%";
                    elem1.innerHTML = width + "%";
                    }
                }
                function incrementarProgreso2() {
                        // Si el progreso esta completo, detenemos el programa
                        if (width >= 50) {
                        clearInterval(id2);
                        } else {
                        width++;
                        // Modificamos el DOM, para impactar el nuevo progreso.
                        elem2.style.width = width + "%";
                        elem2.innerHTML = width + "%";
                        
                    }
                }
                function incrementarProgreso3() {
                    // Si el progreso esta completo, detenemos el programa
                    if (width >= 60) {
                    clearInterval(id3);
                    } else {
                    width++;
                    // Modificamos el DOM, para impactar el nuevo progreso.
                    elem3.style.width = width + "%";
                    elem3.innerHTML = width + "%";
                    
                }
                }
                function incrementarProgreso4() {
                // Si el progreso esta completo, detenemos el programa
                if (width >= 50) {
                clearInterval(id4);
                } else {
                width++;
                // Modificamos el DOM, para impactar el nuevo progreso.
                elem4.style.width = width + "%";
                elem4.innerHTML = width + "%";
                
            }
                } 
            }
            

    const iniciar = document.querySelector("#iniciar-carga");
    const contenedor = document.querySelector('.block2');
    const oculta = document.querySelector(".fondo-espera")

const skills = [
    {
        nombre: "Front End",
        skill1: `✓ HTML<br> ✓ Css<br> ✓ JavaScript<br> ✓ React<br>`       
    }
    ,
    {
        nombre: "Back End",
        skill1: `✓ JAVA<br> ✓ Node.js <br> `        
    }
    ,
    {
        nombre: "Bases De Datos",
        skill1: `✓ Lenguaje SQL<br> ✓ Motor Mysql<br> ✓ Motor PostGrest<br> ✓ Motor Oracle<br>`            
    },
    {
        nombre: "Control De Versiones",
        skill1: `✓ Manejo De La Terminal<br> ✓ GIT<br> ✓ GitHub<br>`           
    }
]


function mostrarSkills(){

    contenedor.innerHTML = ""
             
    let crearSkills = `<div class="card-technologies">
                            <h2>${skills[0].nombre}</h2>
                            <div id="progreso1" >
                            <div id="barra1" >0%</div>
                        </div>
                        <div>
                            <p> 
                                ${skills[0].skill1}
                            </p>
                        </div>
                        </div>
                        
                        <div class="card-technologies">
                            <h2>${skills[1].nombre}</h2>
                            <div id="progreso2">
                            <div id="barra2">0%</div>
                        </div>
                        <div>
                            <p> 
                                ${skills[1].skill1}
                            </p>
                        </div>
                        </div>
                        
                        <div class="card-technologies">
                            <h2>${skills[2].nombre}</h2>
                            <div id="progreso3" >
                            <div id="barra3">0%</div>
                        </div>
                        <div>
                            <p> 
                                ${skills[2].skill1}
                            </p>
                        </div>
                        </div>
                        
                        <div class="card-technologies">
                            <h2>${skills[3].nombre}</h2>
                            <div id="progreso4">
                            <div id="barra4">0%</div>
                        </div>
                        <div>
                            <p> 
                                ${skills[3].skill1}
                            </p>
                        </div>
                        </div>`;

    contenedor.innerHTML += crearSkills;                 

 
}   

iniciar.addEventListener('click', function(){
    
    mostrarSkills()
    animarBarra()
    classListRemove(oculta)
})


        
        
    

   







            




