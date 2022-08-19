
function encontrarPersona(personaBusqueda){

return salarios.find(persona => persona.name==personaBusqueda )

}

function med(salariosPersona){
    let salarioOrdenado=salariosPersona.sort((a,b)=>a-b)

    if(salariosPersona.length %2==0){
        let mitadSup=salarioOrdenado.length/2;
        let mitadInf=(salarioOrdenado.length/2)-1
        let med= (salarioOrdenado[mitadInf]+ salarioOrdenado[mitadSup])/2
        return med
    }else{
       
        let mitadF=Math.floor(salarioOrdenado.length/2)

        return salarioOrdenado[mitadF]
    }
}

function medianaPersonas(nombrePersona){


    let trabajoPersona=encontrarPersona(nombrePersona).trabajos
    let salariosPersona=trabajoPersona.map(persona=> persona.salario)
    let salarioOrdenado=salariosPersona.sort((a,b)=>a-b)

    if(salariosPersona.length %2==0){
        let mitadSup=salarioOrdenado.length/2;
        let mitadInf=(salarioOrdenado.length/2)-1
        let med= (salarioOrdenado[mitadInf]+ salarioOrdenado[mitadSup])/2
        return med
    }else{
       
        let mitadF=Math.floor(salarioOrdenado.length/2)

        return salarioOrdenado[mitadF]

    }
}

function proyeccionSalarial(nombrePersona){
    let trabajoPersona=encontrarPersona(nombrePersona).trabajos
    let salariosPersona=trabajoPersona.map(persona=> persona.salario)
    let salarioOrdenado=salariosPersona.sort((a,b)=>a-b)
    let calc=[]
    console.log(salarioOrdenado)
    for(let i=1; i<salarioOrdenado.length; i++){
      let salarioActual= salarioOrdenado[i]
      let salarioPasado= salarioOrdenado[i-1]
      let proy=(salarioActual-salarioPasado)/salarioPasado
      calc.push(proy)
    }
    let medProy= med(calc)
    let aumento= salarioOrdenado[salarioOrdenado.length-1]*medProy;
    let proyeccion=salarioOrdenado[salarioOrdenado.length-1]+aumento
    console.log({proyeccion,aumento,medProy})

}


const empresas= {}
for(persona of salarios){
    for(trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa]={}
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year]=[]
        }
        // if(!empresas[trabajo.empresa][trabajo.year][year.name]){
        //     empresas[trabajo.empresa][trabajo.name][year.name]=[]
        // }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}
empresas

function medianaEmpresaYear(nombre,year){
    
    if(!empresas[nombre]){
        console.warn("No hay empresas con ese nombre")
    }else if(!empresas[nombre][year]){
        console.warn("La empresa no dio salarios ese año")
    }else{
        return med(empresas[nombre][year])
    }
}

function proyeccionSalarialEmpresa(nombre){
    if(!empresas[nombre]){
        console.warn('La empresa no existe')
    }else{
        const empresaYears=Object.keys(empresas[nombre])
        const medEmpresa= empresaYears.map(year=> {
            return medianaEmpresaYear(nombre,year)
        })
        console.log(medEmpresa)

    let calc=[]
    for(let i=1; i<medEmpresa.length; i++){
      let salarioActual= medEmpresa[i]
      let salarioPasado= medEmpresa[i-1]
      let proy=(salarioActual-salarioPasado)/salarioPasado
      calc.push(proy)
    }
    let medProy= med(calc)
    let aumento= medEmpresa[medEmpresa.length-1]*medProy;
    let proyeccion=medEmpresa[medEmpresa.length-1]+aumento
    console.log({proyeccion,aumento,medProy})









    }
    
}
