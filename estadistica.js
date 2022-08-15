const number= document.querySelector('.number')
const prom= document.querySelector('.prom')
const guardar= document.querySelector('.guardar')
const resultado= document.querySelector('.resultado')
const parImpar= document.querySelector('.parImpar')


guardar.addEventListener('click',genLista)
prom.addEventListener('click',promLista)


let lista=[]
function genLista(){
    while(guardar)
    {
        lista.push(number.value)
        console.log(lista)
        let cantidadLista=lista.reduce((a,b)=> parseInt(a)+parseInt(b))
        
            if(lista.length%2==0){
                
                parImpar.innerText='La cantidad de elementos en la lista es par'
                
            }else{
                
                parImpar.innerText="La cantidad de elementos en la lista es impar";
            };
        break
        
    }

}

function promLista(){
    console.log(`Los elementos de la lista son: ${lista}`)
    promedio=(lista.reduce((a,b) => parseInt(a)+parseInt(b)))/lista.length
    resultado.innerText="El promedio es: " + promedio;
    return;
}