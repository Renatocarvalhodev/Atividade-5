/* Crie funções que devem ter como parâmetro uma propriedade “lista” que vai receber um array com vários números, as funções devem ser criadas para devolver os dados conforme solicitado:
Uma função que devolve os valores que são maiores que a média
Uma função que devolva o menor valor da lista
Uma função que devolva o valor da soma dos itens da lista
Uma função que devolva todos os valores que são menores que 20
Uma função que vai devolver o primeiro e o último valor da lista
*/
function valoresMaioresQueMedia(valores) {
  // ### Escreva Seu código aqui :) ###
  const somaLista = valores.reduce((total,valor) => total + valor, 0)
  const media = somaLista/valores.length
  const resultMaiorMedia = valores.filter(item => item > media)
  return resultMaiorMedia
  // ### FIM do código ###
}

function menorValor(valores) {
  // ### Escreva Seu código aqui :) ###
  const menorValor =  Math.min(...valores)
  return menorValor
  // ### FIM do código ###
}

function somaDosItens(valores) {
  // ### Escreva Seu código aqui :) ###
  const somaLista = valores.reduce((total,valor) => total + valor,0)
  return somaLista
  
  // ### FIM do código ###
}

function valoresMenoresQue20(valores) {
  // ### Escreva Seu código aqui :) ###
  const todosMenores20 = valores.filter(item => item < 20)
  return todosMenores20
  // ### FIM do código ###
}

function primeiroEUltimo(valores) {
  // ### Escreva Seu código aqui :) ###
  const primeiroEUltimo = [valores[0], valores[(valores.length)-1]]
  return primeiroEUltimo
  // ### FIM do código ###
}

/* ==== Não apagar ==== */
module.exports = {
  valoresMaioresQueMedia,
  menorValor,
  somaDosItens,
  valoresMenoresQue20,
  primeiroEUltimo
}
