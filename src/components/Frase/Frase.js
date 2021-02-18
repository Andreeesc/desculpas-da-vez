import React from 'react'

let frases = [
    {
        frase: 'Desculpa, não estou me sentindo bem hoje',
        categoria: 'Geral'
    },
    {
        frase: 'Desculpa, mas preciso ajudar a minha mãe',
        categoria: 'Geral'
    },
    {
        frase: 'Desculpa, estou sem dinheiro',
        categoria: 'Geral'
    },
    {
        frase: 'Desculpa, preciso levar o meu cachorro para passear',
        categoria: 'Geral'
    },
    {
        frase: 'Desculpa, preciso levar o meu gato para passear',
        categoria: 'Geral'
    },
    {
        frase: 'Desculpa, estou com cólica',
        categoria: 'Geral'
    },
    {
        frase: 'Mals, mas não vai rolar não',
        categoria: 'Geral'
    },
    {
        frase: 'Vish, tem que tá vendo',
        categoria: 'Geral'
    },
    {
        frase: 'Desculpa, não vou conseguir ir não',
        categoria: 'Geral'
    },
    {
        frase: 'Desculpa, torci o pé e não consigo andar',
        categoria: 'Geral'
    },
    {
        frase: 'Não posso abrir a câmera, porque a minha Internet está lenta.',
        categoria: 'Geral'
    },
    {
        frase: 'To sem sinal do celular, não vou conseguir atender a ligação.',
        categoria: 'Geral'
    },
    {
        frase: 'Ih, preciso levar a minha avó no jiu-jitsu',
        categoria: 'Sair'
    },
    {
        frase: 'Não vai rolar, preciso levar o peixe para passear',
        categoria: 'Sair'
    },
    {
        frase: 'Não vou poder ir, o pessoal daqui de casa saiu, e levaram todas as chaves',
        categoria: 'Sair'
    },
    {
        frase: 'Meu cachorro não ta legal, vou precisar ficar para cuidar dele.',
        categoria: 'Sair'
    },
    {
        frase: 'Eita, esqueci esse livro em casa, e as respostas estão lá.',
        categoria: 'Educação'
    },
]

const fraseRandom = frases[Math.floor(Math.random() * frases.length)]

function Frase(){ 

    return <p>{fraseRandom.frase}</p>
}

export default Frase