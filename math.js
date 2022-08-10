//Cuadrado
console.group('cuadrado')

const ladoCuadrado= 4
const areaCuadrado= ladoCuadrado*ladoCuadrado;
const perimetroCuadrado=ladoCuadrado*4
console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

function cuadrado(lado1){
        return{
        area:lado1*lado1,
        perimetro:lado1*4,
    }
}
console.groupEnd('cuadrado')
//triangulo

console.group('Triangulo') 

const trianguloLado1= 6;
const trianguloLado2= 6;
const trianguloAltura= 5.5;
const trianguloBase=4;
const areaTriangulo=(trianguloBase*trianguloAltura)/2
const perimetroTriangulo=(trianguloLado1+trianguloLado2+trianguloBase)

console.log({
    areaTriangulo,
    perimetroTriangulo
})
function triangulo(lado1,lado2,base,altura){
    return{
        area:(base*altura)/2,
        perimetro:(lado1+lado2+base),
        lado1,
        lado2,
        base,
    }
}
console.groupEnd('Triangulo')


//circulo

console.group('Circulo')
const radioCirculo=3;
const diametroCirculo= radioCirculo*2;
const areaCirculo= Math.PI*(radioCirculo**2)

console.log({
    radioCirculo,
    diametroCirculo,
    areaCirculo,
})

function Circulo(radio){
    return{
        radio,
        area: Math.PI*Math.pow(radio,2),
        circunferencia:Math.PI*radio,
    }
}

console.groupEnd('Circulo')

//Altura de un triangulo isosceles

console.group('alturaTriangulo')
const ladoTriangulo=6
const baseTriangulo=4
const alturaTriangulo=Math.sqrt((ladoTriangulo**2)-(Math.pow(baseTriangulo,2)/4))

console.log({
    alturaTriangulo,
})


console.group('alturaTriangulo')



