const number= document.querySelector('.number')
const prom= document.querySelector('.prom')
const guardar= document.querySelector('.guardar')
const resultado= document.querySelector('.resultado')
const med= document.querySelector('.medianaP')
const medButton= document.querySelector('.med')


guardar.addEventListener('click',genLista)
prom.addEventListener('click',promLista)
medButton.addEventListener('click',medLista)

let lista=[]
function genLista(){
    while(guardar)
    {
        lista.push(number.value)
        console.log(lista)
        let cantidadLista=lista.reduce((a,b)=> parseInt(a)+parseInt(b))
        
            if(lista.length%2==0){
                
                let indexListaPar=Math.floor(lista.length / 2 )

            }else{
                let indexListaImpar=Math.floor(lista.length / 2) -1
                
            };
            return promLista()
        break
        
    }

}

function promLista(){
    console.log(`Los elementos de la lista son: ${lista}`)
    promedio=(lista.reduce((a,b) => parseInt(a)+parseInt(b)))/lista.length
    resultado.innerText="El promedio es: " + promedio;
    const ordenarLista= lista.sort((a,b)=> a-b)
console.log(ordenarLista)
}

function medLista(lista){

    if(lista.length%2==0){
        console.log("Soy par")
        let medInteriorInf=lista.length/2
        let medInteriorSup=(lista.length/2)+1
        let medInterior=(medInteriorInf+medInteriorSup)/2
        console.log(medInterior)
    }else{
        console.log("Soy impar")
    }
}

const ordenarLista= lista.sort((a,b)=> a-b)
console.log(ordenarLista)


function modaLista(lista){
    let listaCount={}
    
    for(let i=0; i<lista.length;i++){
        let elemento= lista[i]
        if(listaCount[elemento]){
            listaCount[elemento] +=1

        }else{
            listaCount[elemento]=1
        }
    }
    let listArray= Object.entries(listaCount);
    console.log({listaCount,listArray})
}
lista=[1,2,3,3,2,1,4,4,2,1,5,2,2]
ordenarListaBidimensional(lista)
function ordenarListaBidimensional(lista){
    let listaCount={}

    for(let i=0; i<lista.length ;i++){
        let elemento=lista[i]
        if(listaCount[elemento]){
            listaCount[elemento]+=1;
        }else{
            listaCount[elemento]=1;
        }

    }
    let ordenarLista= lista.sort((a,b)=> a-b)
    let listArray=Object.entries(listaCount)


  console.log(listArray.sort((a,b)=> a[1]-b[1]))
  

}


function promedioPonderado(){

   let notas=[6,2,3,4,5,8]
   let prom=((notas.reduce((a,b)=> a+b )- (notas[notas.length-1]))*10+  (notas[notas.length-1]*50))/100
   console.log(prom)
}
promedioPonderado()
