import React from 'react';

function traverse(tree) {
  if (!tree) {
    return ''
  } else if (typeof(tree) === 'string') {
    return <div>{tree}</div>
  } else if (Array.isArray(tree)) {
    if (tree.length === 0) {
      return ''
    } else if (tree.length === 1) {
      return traverse(tree[0])
    } else {
      const acc = tree.map((el,i) => <li key={i}>{traverse(el)}</li>)
      return <ol>{acc}</ol>
    }
  } else if (typeof(tree) === "object") {
    let acc = []
    for (var i in tree) {
      if (tree.hasOwnProperty(i)) {
        acc.push([traverse(i),traverse(tree[i])]);
      }
    }
      return <ul>{acc.map((el,i) => <li key={i}>{el[0]}{el[1]}</li>)}</ul>
  }
}

export {traverse};