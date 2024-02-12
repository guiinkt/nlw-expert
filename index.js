const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses não é um tipo de dado em JavaScript?",
      respostas: [
        "Number",
        "Character",
        "String",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída da expressão '3' + 2 em JavaScript?",
      respostas: [
        "5",
        "32",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destas estruturas de controle é usada para iterar sobre uma lista em JavaScript?",
      respostas: [
        "for",
        "if",
        "while",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes operadores é usado para comparar valores e tipos em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "addToEnd()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destas opções é usada para declarar uma função em JavaScript?",
      respostas: [
        "def",
        "function",
        "função",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave usada para indicar o fim de uma função em JavaScript?",
      respostas: [
        "return",
        "end",
        "finish",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "toInt()",
        "parseString()",
        "parseInt()",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição 
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    //pega dentro do quizItem do dl e dt, no caso, as respostas
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //remove a primeira linha de resposta
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }