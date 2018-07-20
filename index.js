
const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
}
// document.getElementById("app").querySelector("div");



function getFirstSelector(selector) {
  return document.querySelector(selector);
}
// console.log(getFirstSelector("div"));



function nestedTarget() {
  return document.querySelector('#nested .target')
}
//console.log(nestedTarget());



function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children
    //console.log(children);

    for (let k = 0; k < children.length; k++) {
      children[k].innerHTML = parseInt(children[k].innerHTML) + n
    //the two types are not compatible hence we need parseInt
    }
  }
}
increaseRankBy(1);  //increases all by this number in HTML



function deepestChild() {
  let boo = document.getElementById("grand-node").children[0].children[0].children[0].children[0];
  // let boo = document.getElementById("grand-node").querySelector("div").querySelector("div").querySelector("div").querySelector("div");
    return boo;
  //return boo.innerHTML = "yes!"  we can change it here
}
console.log(deepestChild());


//iterative version:
// function deepestChild() {
//   let node = document.getElementById('grand-node')
//   let nextNode = node.children[0]
//
//   while (nextNode) {
//     node = nextNode
//     nextNode = node.children[0]
//   }
//
//   return node
// }
