// get first selector
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

//pulls .target out of #nested div
function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

//increase .ranked-lists by n
function increaseRankBy(n) {
  const ranks = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString()
  }
}

//pulls out deepest child from div#grand-node
//'#grand-node div div div div'
function deepestChild() {
  let stuff = document.querySelector('#grand-node')
  console.log(stuff.children[0].children)
  while (stuff.children[0].children[0]) {
    stuff = stuff.querySelector('div')
    console.log(stuff)
  }
  return stuff.children[0]
}
