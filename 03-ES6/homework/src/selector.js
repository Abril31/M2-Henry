var traverseDomAndCollectElements = function (matchFunctionMaker, startEl = document.body) {
  var resultSet = [];//

  if(matchFunctionMaker(startEl)) resultSet.push(startEl);
  for(let i=0; i<startEl.children.length; i++){
    let x = traverseDomAndCollectElements(matchFunctionMaker, startEl.children[i]);
    resultSet = [...resultSet,...x]
  }
  return resultSet;

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) { //
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  if(selector.split('.').length > 1) return 'tag.class'; //el split devuelve ['p', 'ordenado']
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (element) => `#${element.id}` === selector

  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      let listaDeClases = elemento.classList; //retorna un array con la lista que de clases ['rojo', 'alto', 'bajo']
      return listaDeClases.includes(selector.slice(1))//le corté el punto con el slice al pasarle un parámetro
    }
       
  } else if (selectorType === "tag.class") {
    matchFunction = (elemento) => {
      const [tag, className] = selector.split('.')// me queda ['div', 'verde']
      return matchFunctionMaker(tag)(elemento) && matchFunctionMaker(`.${className}`)(elemento);// let match = matchFunctionMaker(tag):
                                                                                                // match (elemento)      
    }

  } else if (selectorType === "tag") {// tagName devuelve "DIV"
    matchFunction = (elemento) => elemento.tagName.toLowerCase() === selector;
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
