// TIPO ANY
/*

Quando não é definido o tipo, conforme o exemplo abaixo em "value"

let price = 40
let item = 'apple'
let inStore = true

let value: 
value = 10
value = 'Andre'

---------------------------------
ARRAY 


let value: number[] = [10, 20, 30, 'a'] 
Aqui foi especificado que seria apenas numbers e não pode a strin 'a'


-------------------------------------------------
TUPLES

let item: [string, number, boolean] = ['Apple', 3, true]

item[1].toString


--------------------------------------------
ENUM
Serve para quando você quiser fazer a associação de dois itens.

enum Role {admin = 1, read = 2, backup = 3}

const user = {
    fisrtName: 'Andre',
    age: 40,
    cargo: Role.backup
}
console.log(user)

------------------------------------------
FUNCTION


function numeral (num1:number, num2:number) {
    return num1 + num2
}

console.log(numeral(5, 5))

---------------------------------------------
FUNCTION VOID

function result (price:number){
    console.log('O resultado é ' + price)
}
console.log(result(numeral(6,5)))   -> APROVEITEI O CÓDIGO DE CIMA NA FUNÇÃO


-----------------------------------------
OBJETO

const user = {
    firstName: 'Joao'
    idade: 30,
    lastName: 'Vitor'
}

user.lastName = 'Nunes'

------------------------------------
UNKNOWN

let itemInput = unknown
let itemName: string

itemInput = 10
itemInput = 'Apple'

if (itemInput === 'string'){
    itemName = itemInput
}

----------------------------------
NEVER


function generateError(message:string, code: number): never{
    throw {message: message, errorCode: code}
}

generateError('The application crashed', 500)
console.log(generateError('The application crashed', 500))


---------------------------------------
ALIAS type

type Users = {
    firstName: string
    age: Number
}

const user: Users = {
    firstName: 'Henrique',
    age: 35
}


--------------------------------------
UNION type


function userInput(input1: number | string, input2: number | string) {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2
}
else {
    result = input1.toString() + input2.toString()
}
return result
}

const combinePrices = userInput(10, 20)
console.log(combinePrices)

const combineName = userInput('Apple', 'Advogado')
console.log(combineName)


-----------------------------------------------------------------
LITERAL type 

let produtoPreco: 50
produtoPreco = 50

let produtoNome: 'Azul' | 'Amarelo' | 'Verde'
produtoNome = 'Azul'


------------------------------------------------
// Day 3 - Exercise 1

let pi = 3.14159;
let tau = pi * 2;


console.log(`${tau} is ${pi} times two.`);

---------------------------------------------------
// Day 3 - Exercise 2


let pie: string
pie = 'blueberry'

console.log(`I like to eat ${pie}-flavored pie.`)

let isDouglas: boolean = true

console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)

--------------------------------------------------
// Day 3 - Exercise 4


const integer: number = 6;
const float: number = 6.66;
const hex: number = 0xf00d;
const binary: number = 0b1010011010;
const octal: number = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

const members: number[] = [
  integer,
  float,
  hex,
  binary,
  octal,
  negZero,
  actuallyNumber,
  largestNumber,
  mostBiglyNumber
];

members[0] = 12345;

console.log(members);



// Day 3 - Exercise 5

const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);

-----------------------------------------------
TSC --WATCH

Para os arquivos serem mostrado imediatamente no console, basta no terminal digitar: tsc --watch
Mas antes verifique se as configurações anteriores foram feitas:
Em * Modules * "rootDir":"nome da pasta que contém os arquivos que vai ser compilado"
Em * Emit * "outDir":"Aqui será indicado o arquivo JS, faça uma pasta e coloque separado"
Em *Type checking* tira as barras de comentário do "Strict": true e coloque como true caso não esteja
No "noEmitOnError" tirar as barras de comentario e deixar true.

Para cancelar o watch é só apertar ctrl+c

-------------------------------------------------------
INCLUDE E EXCLUDE

Para 'excluir' o arquivo ou seja deixar de fora do console, basta ir no arquivo 'tsconfig.json' 
e antes da última chave colocar o seguinte: "exclude": ["nome da pasta/arquivo"] para excluir do console 
o arquivo que deseja.

---------------------------------------------------------
O TARGET

O target fica no tsconfig.json nele você poderá verificar e trocar a versão do seu javascript (EC2016 - EC2020)
caso queira alterar a versão, basta escolher as opções que aparece quando você clica ou colocar manualmente

------------------------------------------------------
SOURCE MAPS

Serve para quando for debugar, buscar erros na aplicação. Para habilitar basta fazer o seguinte:
tsconfig.json tirar as barras de comentários em "Source Maps"

---------------------------------------------------------
REMOVENDO COMENTS

Para remover os comentários do arquivo JS e deixar apenas no TS. Ou seja, você comenta os códigos no TS e
não vai aparecer no JS para deixar mais CLEAN o arquivo JS.

--------------------------------------------------------------
ROOTDIR E OUTDIR

Para criar ou organizar as pastas no vscode

    SCR - vau conter os arquivos finais da aplicação e na configuração do tsconfig.json em Modules no
    RootDit colocar a pasta "src"

    DIST - ficam os arquivos JS, no EMIT em OutDir colocar a pasta DIST

----------------------------------------------
noEmitOnError

Serve para caso você queira ignorar o erro do código e que ele vá para o JS mesmo errado mas para isso
precisa deixar ele no FALSE. Ex.: 

tsconfig.json > Emit > "noEmitOnError: false"

---------------------------------------------------
STRICT E IMPLICIT ANY

Quandoi no tsconfig em type cheking em "strict:true" você deixa true, isso habilita todos abaixo 
que sejam strick com true e caso queira tirar algum especifico, basta tirar o comentário e colocar com false aquela
regra específica

---------------------------------------------------------------
UNUSED LOCALS

Serve para verificar variáveis dentro da função que não estão sendo utilizadas, ou códigos desnecessários
para aquela aplicação, deixando mais clean. Ex.:

funtions moeda (valor: number, cor: string) {
    let europa: 'londres'
    console.log(valor)
}

Veja que a variável "europa" não está sendo utilizada
--------------------------------------------------------------------
UNUSED LOCALS

Serve para verificar os parametros dentro da função que não estão sendo utilizadas. Ex.:

funtions moeda (valor: number, cor: string) {
    console.log(valor)
}

Veja que a "cor" não está sendo utilizada
*/