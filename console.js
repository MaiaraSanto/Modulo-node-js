
console.log('ESTES SÃO OS LIVROS QUE LI ESTE ANO;')


const livros = [
    {
        titulo: "Gatilhos mentais",
        autor: "Gustavo Ferreira",
        ano: 2019,
        editora: 'DVS',
    },
    {
        titulo: "Reescrevendo limites",
        autor: "Andrei Rosseti",
        ano: 2023,
        editora: null
    },
    {
        titulo: "Atravessando o abismo",
        autor: "Geoffrey A. Moore",
        ano: 2021,
        editora: "Alta Books",
    },
    {
        titulo: "Neuromarketing",
        autor: "Daren Bridger",
        ano: 2018,
        editora: "Autentica",
    },
    {
        titulo: "Marketing 5.0",
        autor: "Philip Kotler",
        ano: 2023,
        editora: "Sextante",

    },

]

console.table(livros);

console.time('livros');
console.timeEnd('livros');

