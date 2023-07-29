
const redline = require("redline");
const leitor = redline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

leitor.question("Digite um número", function (resposta){
console.log("\nSua resposta '" + resposta + "'");
leitor.close();
});