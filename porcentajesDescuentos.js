const boton1 = document.querySelector('.button1')
const cantidad1= document.querySelector('.cantidad1')
const pDescuento1= document.querySelector('.descuento1')
const boton2 = document.querySelector('.button2')
const cantidad2= document.querySelector('.cantidad2')
const dinero= document.querySelector('.dinero2')
const pDescuento2= document.querySelector('.descuento2')
const boton3 = document.querySelector('.button3')
const cantidad3= document.querySelector('.cantidad3')
const pDescuento3= document.querySelector('.descuento3')




boton1.addEventListener('click',descuento1)
boton2.addEventListener('click',descuento2)
boton3.addEventListener('click',descuento3)


function descuento1(){

    if(cantidad1.value ==10 ){
        a=parseFloat(cantidad1.value)
        const descuento= (a*(100-10))/100;
        pDescuento1.innerText="El descuento es: " + descuento

        return;
        
    }if(cantidad1.value==30){

        let descuento= (cantidad1.value*(100-30))/100
        pDescuento1.innerText="El descuento es: " + descuento

        return;
    }else{
        return alert('Cantidad invalida')
    }

}

function descuento2(){

    const cupones= {
        Gabo:10,
        Gabobo:20,
        Gabobobo:30,
    }
    for(const property in cupones){
        if(cantidad2.value==property){
            const descuento= (dinero.value*(100-cupones[property]))/100;
        pDescuento2.innerText="El descuento es: " + descuento
        }
    }

    // if(cantidad2.value ==desc ){

    //     let desc=10;
    //     const descuento= (dinero.value*(100-desc))/100;
    //     pDescuento2.innerText="El descuento es: " + descuento

    //     return;
        
    // }if(cantidad2.value=="Gabobo"){

    //     let desc=35;
    //     let descuento= (dinero.value*(100-desc))/100
    //     pDescuento2.innerText="El descuento es: " + descuento

    //     return;
    // }else{
    //     return alert('Cantidad invalida')
    // }

}

function descuento3(){

    if(cantidad3.value ==10 ){
        a=parseFloat(cantidad3.value)
        const descuento= (a*(100-10))/100;
        pDescuento3.innerText="El descuento es: " + descuento

        return;
        
    }if(cantidad3.value==30){

        let descuento= (cantidad3.value*(100-20))/100
        pDescuento3.innerText="El descuento es: " + descuento

        return;
    }else{
        return alert('Cantidad invalida')
    }

}