/* Dado o array [9, 2, 3, 1, 4] encontre todos os números que estão faltando para completar o
intervalo 0 a n, onde n é o maior número dentro do array. Adicione os números faltando dentro
do array. */

function findNumber(array){
   const min = Math.min(...array);
   const max = Math.max(...array);
   const numbersMissing = [];

   for(let i = min; i <= max; i++){
      if(!array.includes(i)){
         numbersMissing.push(i)
      }
   }
   return numbersMissing;
}

console.log(findNumber([9,2,3,1,4]))