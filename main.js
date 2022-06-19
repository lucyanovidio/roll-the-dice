// Qual a entrada e a saída?
// Quais as variáveis?

const main = document.querySelector('#main')
const result = document.querySelector('#result')
const diceFaces = ['1', '2', '3', '4', '5', '6']

// antes isso aqui não tava dando certo pq eu tava tentando pegar as imgs de dentro de uma div. Eu n sei como referenciar, tlgd, sem ser um id fora, pelado igual tá aqui.
const diceFace1 = document.querySelector('#face1')
const diceFace2 = document.querySelector('#face2')
const diceFace3 = document.querySelector('#face3')
const diceFace4 = document.querySelector('#face4')
const diceFace5 = document.querySelector('#face5')
const diceFace6 = document.querySelector('#face6')

function rollDice() {
  // ADICIONAR A CLASSE ROLLING-DICE (ESTADO "ROLANDO")

  main.classList.add('rolling-dice')

  // TOTAL E CÁLCULO DE NÚMERO ALEATÓRIO PRO SORTEIO DO DADO

  const totalFaces = diceFaces.length
  const randomNum = Math.floor(Math.random() * totalFaces)

  // FAZENDO ELE MOSTRAR A IMAGEM DA FACE CORRESPONDENTE AO NÚMERO

  // primeiro digo pra remover pra quando chamar a função dnv girando o dado dnv, se n a imagem fica no show para sempre
  diceFace1.classList.remove('show')
  diceFace2.classList.remove('show')
  diceFace3.classList.remove('show')
  diceFace4.classList.remove('show')
  diceFace5.classList.remove('show')
  diceFace6.classList.remove('show')

  if (randomNum == 0) {
    diceFace1.classList.add('show')
  } else if (randomNum == 1) {
    diceFace2.classList.add('show')
  } else if (randomNum == 2) {
    diceFace3.classList.add('show')
  } else if (randomNum == 3) {
    diceFace4.classList.add('show')
  } else if (randomNum == 4) {
    diceFace5.classList.add('show')
  } else if (randomNum == 5) {
    diceFace6.classList.add('show')
  }

  // ESCREVENDO O RESULTADO NO h2

  result.innerHTML =
    '<div>' + 'Seu resultado é:' + '</div>' + diceFaces[randomNum]

  // DEFININDO QUE ELE FICA 3s ROLANDO PRA MOSTRAR QUAL É O RESULTADO

  setTimeout(function () {
    main.classList.remove('rolling-dice')
    main.classList.add('dice-result')
  }, 4000)
}

function rollDiceAgain() {
  // PRIMEIRO REMOVENDO A CLASSE DO RESULTADO

  if (main.classList == 'dice-result') {
    main.classList.remove('dice-result')
  }

  // CHAMANDO A FUNÇÃO DE ROLAR PRA ROLAR DNV

  rollDice()
}

function backToStart() {
  // REMOVER A CLASSE E VOLTAR PRO COMEÇO

  if (main.classList == 'dice-result') {
    main.classList.remove('dice-result')
  }
}
