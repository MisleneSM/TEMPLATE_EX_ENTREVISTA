const modulosDoCurso = ['finaças', 'marketing', 'soft-skills', 'vendas']

let listaDePessoasEstudantes =[
    {
        nome : 'Júnior',
        idade: 35,
        cpf: 96780541087, 
        modulo: modulosDoCurso[0]
    },
]

const pessoaEstudante = {
    nome : 'Fayra',
    idade: 20,
    cpf: 91349341037, 
    modulo: modulosDoCurso[1]
}

//listaDePessoasEstudantes = pessoaEstudante;

let novaListaDeEstudante = listaDePessoasEstudantes.push(pessoaEstudante);
console.log(novaListaDeEstudante)
console.log('Mislene');

pessoaEstudante.nome = 'Mislene';
pessoaEstudante.idade = 23;
pessoaEstudante.cpf = 91349341037;
pessoaEstudante.modulo = modulosDoCurso[0];


let novaVariavel = listaDePessoasEstudantes.length;
console.log(novaVariavel);

let novaPessoaEstudante = {
    ...pessoaEstudante, 
    nome: 'Mislene',
    idade: 23,
    cpf: 1234567893,
    modulo: modulosDoCurso[0]
}

listaDePessoasEstudantes.push(novaPessoaEstudante);
console.log(listaDePessoasEstudantes);

const mapeamentoPessoa = novaPessoaEstudante.map( (e) => e.idade +1)
console.log(mapeamentoPessoa);
