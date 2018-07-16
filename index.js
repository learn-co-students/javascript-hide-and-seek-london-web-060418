function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }
}


function deepestChild(){
  const grand = document.getElementById('grand-node');
  var div = grand.children[0];

  for (var i = 0; i < 3; i++) {
    div = div.children[0];
  }
  console.log(div);
  return div;
}
