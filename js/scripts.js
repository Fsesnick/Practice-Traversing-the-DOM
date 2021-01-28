// PONTO DE PARTIDA 
const list = document.querySelector('.list');

// 1:Armazene o primeiro filho do `ul` na variável` firstItem` 

const firstItem = list.firstElementChild;
firstItem.style.backgroundColor = '#04c5e6';

// 2: Usando a travessia, armazene o segundo item da lista em uma variável chamada `nextItem` 
const nextItem = firstItem.nextElementSibling;
nextItem.style.backgroundColor = '#b7c7d0';

// 3: Armazene o último filho do `ul` em uma variável chamada` lastItem` 

const lastItem = list.lastElementChild;
lastItem.style.backgroundColor = '#57d6ab';

// 4:Usando travessia, armazene o penúltimo item da lista em uma variável chamada `prevItem` 
const prevItem = lastItem.previousElementSibling;
prevItem.style.backgroundColor = '#f36f49';

// 5: Armazene o div aninhado em uma variável chamada `banner` 
const banner = list.previousElementSibling;
banner.className = 'banner';

// 6: Usando travessia, armazene o div wrapper em uma variável chamada `wrapper`
const wrapper = list.parentNode;
wrapper.style.backgroundColor = '#fcfcfc';

// 7: Usando travessia, armazene o corpo em uma variável chamada `corpo` 

const body = wrapper.parentNode;
body.style.backgroundColor = '#f8fdf3';






