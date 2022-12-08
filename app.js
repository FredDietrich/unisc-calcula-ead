const notaUas = document.getElementById('notaUAs')
const notaMinProva = document.getElementById('notaMinProva')
const explanaCalculo = document.getElementById('explanaCalculo')

const getNotaUas = () => notaUas.value
const getNotaMinProva = () => notaMinProva.value

function calculaNota(e) {
    e.preventDefault()
    if (isNaN(+getNotaUas())) alert('Digite um número por favor')
    const notaValidaUAs = +getNotaUas() * 0.4
    if (notaValidaUAs > 4) alert('Acho que tu exagerou na nota dessas UAs em')
    const notaMinimaValidaProva = 7 - notaValidaUAs
    const notaMinimaProva = notaMinimaValidaProva / 0.6
    if (notaMinimaProva >= 10) {
        alert('Com essa nota nem gabaritando tu passa')
    }
    notaMinProva.value = notaMinimaProva
}