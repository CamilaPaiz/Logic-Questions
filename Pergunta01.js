/* Dado o Array de inteiros abaixo, ordene-o de tal forma que os números “1” estejam à esquerda.
Os itens devem ser modificados no lugar, ou seja, você não ira trocar posições e sim colocar os
números “1” no inicio do Array.
[2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21] */

let array = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21]

array.sort(function(a,b) {
    if(a=== 1){
        return -1;
    } else {
        return 0;
    }
});

console.log(array.sort())
