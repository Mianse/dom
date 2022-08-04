//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.forms[0]);
//console.log(document.links)

//console.log(document.querySelector('.button'));

//const button = document.querySelector('.button');

//button.style.background = 'black';

//var Heroes = document.getElementsByClassName('list-item-hero');
//console.log(Heroes);

//console.log(Heroes[2]);

//Heroes[2].textContent='homelander'

//Heroes[2].style.fontWeight='600'

//Heroes[2].style.backgroundColor = 'red'
//Heroes[2].style.color = 'white'

//looping through to give all the heroes background
//for(i=0;i<Heroes.length;i++){
    //Heroes[i].style.backgroundColor = '#f4f4f4'
//}


//GET ELEMENTBYTAG NAME //

//var Heroes = document.getElementsByTagName('li');

//for(i=0;i<Heroes.length;i++){
    //Heroes[i].style.color='navy'
//}


//QUERRYSELECTOR

var header = document.querySelector('.title');

//header.style.background ='navy';

//header.style.fontFamily = 'poppins';

//header.textContent = 'nyandwaro';

//var input = document.querySelector('input')

//input.style.border = 'none'
//input.placeholder = 'enter hero name'

//var submit =document.querySelector('.button');

//submit.value='send'

//var item = document.querySelector('.list-item-hero')

//item.style.color = 'red';

//var lastItem = document.querySelector('.list-item-hero:last-child')

//lastItem.style.color ='blue'

//var secondHero = document.querySelector('.list-item-hero:nth-child(2)')

//secondHero.style.color ='green'

//QUERY SELECTOR ALL //

var odd = document.querySelectorAll('li:nth-child(odd)');

for(i=0; i<odd.length; i++){
    odd[i].getElementsByClassName.backgroundColor='#f4f4f4';
}

//TRAVERSING THE DOM
itemList = document.querySelector('#items')

//PARENT NODE

//console.log(itemList.parentNode);

//itemList.style.background='#f4f4f4';

//child node

//console.log(itemList.childNodes)

//console.log(itemList.children);
//console.log(itemList.children[1]);

//itemList.children[1].style.backgroundColor = 'yellow'
//first child

//console.log(itemList.firstChild)

//FIRST ELEMENT CHILD
//console.log(itemList.firstElementChild);

//itemList.firstElementChild.textContent = 'coward'

//LAST ELEMENT CHILD

//console.log(itemList.lastElementChild);

//itemList.lastElementChild.textContent = 'Nyandwaro'

// NEXT SIBLING

//itemList.firstElementChild.nextElementSibling.textContent = 'dracular'

//PREVIOUS SIBLING
//console.log(itemList.firstElementChild.nextElementSibling.previousElementSibling)

//CREATE ELEMENT


// CREATE A DIV
var newDiv = document.createElement('div')

console.log(newDiv);


//add class name
newDiv.className='police'

//ADD ID
newDiv.id = 'damianse'

newDiv.setAttribute('title','dembele')


console.log(newDiv)

//CREATE NEW TEXT NODE

var newDivText = document.createTextNode('hello world')

console.log(newDivText)

// ADD TEXT TO DIV

newDiv.appendChild(newDivText)

console.log(newDiv)

var container = document.querySelector('.title');

var h1 = document.querySelector('h2')

container.insertBefore(newDiv,h1)

newDiv.style.fontsize ='90px'









