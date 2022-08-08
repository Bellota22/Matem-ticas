
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