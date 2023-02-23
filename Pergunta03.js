/* Dado o array de números inteiros [1, 15, 2, 7, 2, 5, 7, 1, 4] crie uma função que recebe um
argumento X e retorne true ou false caso haja no array uma combinação de soma entre dois
números que resulte no input X. Exemplo: Se X=2, a função deve retornar true pois existem dois
números 1 dentro do array 1+1 = 2. Caso X=1231 a função deve retornar false pois não existe
uma combina de dois números capazes de somar 1231. */

function sum(param){
    let array = [1, 15, 2, 7, 2, 5, 7, 1, 4];  
    for(let i =0; i< array.length; i++){
        for(let n = i + 1; n < array.length; n++){
        if(array[i] +array[n] === param){
            return true;
        }
      }   
    }
    return false;
}
console.log(sum(7));
console.log(sum(1));