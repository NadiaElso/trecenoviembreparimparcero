let dimension: number = Number(prompt("Ingrese dimension"));

let numeros: number[] = new Array(dimension);

let cantidadpares: number = 0;
let cantidadimpares: number = 0;
let cantidadceros: number = 0;

for (let index = 0; index < dimension; index++) {
  numeros[index] = Number(prompt("Ingrese numeros"));
 
  if (numeros[index]  % 2  === 0) {
    cantidadpares++;
  } else if (numeros[index]!==0 && numeros[index] !%2===0){
    cantidadimpares++;
  } else if (numeros[index] === 0) cantidadceros++;
}

console.log("par" + cantidadpares);
console.log("impar" + cantidadimpares);
console.log("ceros" + cantidadceros);
