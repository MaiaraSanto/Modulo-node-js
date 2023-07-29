// Função para ler um arquivo  txt
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para verificar se uma string contém apenas números
const hasOnlyNumbers = (str) => /^\d+$/.test(str);

// Função para calcular a soma dos números em uma linha
const sumNumbersInLine = (line) => {
  const numbers = line.match(/\d+/g);
  if (!numbers) return 0;
  return numbers.map(Number).reduce((sum, num) => sum + num, 0);
};

// Função para processar o arquivo e exibir o resumo
const processFile = (filePath) => {
  let numLinesWithNumbers = 0;
  let numLinesWithText = 0;
  let sumOfNumbers = 0;

  const start = Date.now();

  const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  readStream.on('data', (chunk) => {
    const lines = chunk.split('\n');
    lines.forEach((line) => {
      if (hasOnlyNumbers(line)) {
        numLinesWithNumbers++;
        sumOfNumbers += sumNumbersInLine(line);
      } else {
        numLinesWithText++;
      }
    });
  });

  readStream.on('end', () => {
    const end = Date.now();
    const executionTime = (end - start) / 1000; // Converter para segundos

    const summary = {
      sumOfNumbers,
      numLinesWithText,
      executionTime
    };

    console.log(summary);

    // Pergunta se deseja continuar
    rl.question('Deseja continuar (s/n)? ', (answer) => {
      if (answer.toLowerCase() === 's') {
        rl.question('Digite o caminho do próximo arquivo txt: ', (filePath) => {
          processFile(filePath);
        });
      } else {
        rl.close();
      }
    });
  });
};

// Pergunta o caminho do arquivo ao usuário
rl.question('Digite o caminho do arquivo txt: ', (filePath) => {
  processFile(filePath);
});




