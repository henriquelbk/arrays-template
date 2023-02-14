const strings = ['copo', 'biscoito', 'cerveja']
console.log(strings.length)

const numeros = [3, 23, 56]
console.log(numeros.includes(78))

const tudao = ['henrique', 78, true]
console.log(tudao.includes(true))

const soUm = [33333]
console.log(soUm.includes(333))

const vazia = []
console.log(vazia.includes(true))

/*Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
Faça push() de uma nova string no array copiado
Imprima os dois arrays. Há diferença?
Como podemos resolver isso?
Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
Imprima novamente ambos os arrays
*/
const strings2 = strings.slice()
strings2.push('uhum')
strings2.splice(2,2)

console.log(strings)
console.log(strings2)

/*Crie um array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.

Depois disso, crie uma cópia deste array utilizando o método slice().

No array copiado: 
Remova o último item 
Adicione o número 6 no fim do array
Remova o número que está no índice 2 do array
Por fim, imprima os dois arrays
*/

const numeros3 = [2, 78, 4, 16, 17]
const numeros4 = numeros3.slice()

numeros4.pop
numeros4.push(6)
numeros4.splice(2, 1)

console.log(numeros3)
console.log(numeros4)