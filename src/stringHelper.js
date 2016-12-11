export function humanize(text) {
  let human = text.replace(/_/g, ' ')
  return human.charAt(0).toUpperCase() + human.slice(1);
}

export function getTitle(tema, argomento) {
  if (tema && argomento) {
    return humanize(tema) + " - " + humanize(argomento)
  } else if (tema) {
    return humanize(tema)
  }
}

// quando la inizializzi ti mette count a zero.
// quando la chiami ti genera "idN" e incrementa
// wow...
// https://groups.google.com/forum/#!msg/reactjs/N-gDqH2LEcQ/bjBBTKSAZaYJ
// var genUnique = (function() {
//   var count = 0;
//   return function() {
//     return 'id' + count++;
//   }
// })();