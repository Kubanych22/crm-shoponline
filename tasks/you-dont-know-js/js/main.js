document.querySelector('.ads').remove();

const swapNode = (nodeA, nodeB) => {
  const parentA = nodeA.parentNode;
  const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;
  
  nodeB.parentNode.insertBefore(nodeA, nodeB);
  parentA.insertBefore(nodeB, siblingA);
}

const items = document.querySelectorAll('.item');
const itemTwo = document.querySelector('.item_two');
const itemTwoTitle = itemTwo.querySelector('.item__title');
const itemTwoPropsFour = itemTwo.querySelector('.props__item_four');

let itemFour = document.querySelector('.item_four');
items[4].before(itemFour);

itemFour = document.querySelectorAll('.props__item_four');
console.log(itemFour);
itemFour[3].after(itemTwoPropsFour)
const itemFive = document.querySelector('.item_five');
const itemFiveTitle = itemFive.querySelector('.item__title');

const itemSix = document.querySelector('.item_six');
const sixPropsListItems = itemSix.querySelectorAll('.item_six .props__item');

const propsList = document.querySelectorAll('.props__list');
let item = sixPropsListItems[8].cloneNode(true);
propsList[1].append(item)
item = sixPropsListItems[9].cloneNode(true);
propsList[1].append(item)

const itemThree = document.querySelector('.item_three');
const itemThreeTitle = itemThree.querySelector('.item__title');
itemThreeTitle.innerHTML = 'This и прототипы объектов';
const itemThreePropsList = itemThree.querySelector('.props__list')

const itemFivePropsList = itemFive.querySelector('.props__list')

swapNode(itemThreePropsList, itemFivePropsList);

const itemSixTitle = itemSix.querySelector('.item__title');
let lastChild = itemSix.querySelector('li:last-child');
lastChild.remove();
lastChild = itemSix.querySelector('li:last-child');
lastChild.remove();
itemTwoTitle.before(itemFiveTitle)
const itemFiveTitleNew = document.createElement('h2');
itemFiveTitleNew.classList.add('.item__title');
itemSixTitle.before(itemTwoTitle)
const itemSixTitleList = itemSix.querySelectorAll('h2');
itemSixTitleList[1].remove()
itemFiveTitleNew.textContent = itemSixTitleList[1].textContent
const itemFiveNew = itemFive.querySelector('.content')
const itemFiveNewImageNode = itemFiveNew.querySelector('.item__image')
itemFiveNewImageNode.after(itemFiveTitleNew)





