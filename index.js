function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  // Stage 1, grab an array of all the
  // selectors with the .rankedlist classname

  const rankedlist= document.querySelectorAll('.ranked-list')

  // stage 2, iterate through each selector in the array we just got
  // capture all their children into an array

  for (let i = 0; i < rankedlist.length; i++) {
    let children = rankedlist[i].children
    console.log(children)


  // stage 3: change the innerHTML here by
  //  parsing the (string) between the <li></li>
  //  tags into a number
  //  before adding n to it

      for (let i = 0; i < children.length; i++) {
        children[i].innerHTML=parseInt(children[i].innerHTML)+n

        // #qUESTION? ..Is it bad to use i in both for loops?
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
