/* Dada a seguinte arvore binária de palavras, faça uma função que busque nessa arvore pela
palavra-chave. O output da sua função deve ser o caminho até chegar no item procurado. Por
exemplo, se o input de buscar for “goiaba” o output deve ser uma string “Maça -&gt; morango -&gt;
Goiaba”. */

class TreeNode {
constructor(value){
    this.value = value;
    this.children = [];
}
};

function findPathToWord(root,target){
    if(!root){
        return null
    }
    if(root.value === target){
        return root.value;
    }

    for(const child of root.children){
        const path = findPathToWord(child,target)
        if(path !== null){
            return `${root.value} -> ${path}`;
        }
    }
    return null;
};

// itens of the tree

const root = new TreeNode('Maçã');
const Morango = new TreeNode('Morango');
const Pera = new TreeNode('Pera');
const Abacaxi = new TreeNode('Abacaxi');
const Goiaba = new TreeNode('Goiaba');
const Limão = new TreeNode('Limão');
const Laranja = new TreeNode('Laranja');
const Banana = new TreeNode('Banana');
const Cebola = new TreeNode('Cebola');

// tree

root.children =[Morango,Pera];
Morango.children =[ Goiaba,Limão];
Pera.children= [Abacaxi];
Abacaxi.children =[Laranja];
Laranja.children = [Banana, Cebola]


const path = findPathToWord(root,'Goiaba');
console.log(path);