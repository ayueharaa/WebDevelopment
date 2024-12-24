// DOM - Document Object Model
// Used to manipulate content, style or structure of html (can alter classes, innerHTML, etc)

// GetElementbyID()
    // const id = document.getElementById('main-heading');
    // console.log (id);

// GetElementbyClass()
    // const classe = document.getElementsByClassName('list-items');
    // console.log(classe);
// Returns an array type that contains all elements

//  GetElementsbyTagName()
    // const tag = document.getElementsByTagName('li');
    // console.log(tag);
// Returns an array type that contains all elements

// Query Selector
    // const querry = document.querySelector('div');
    // console.log (querry);

// Query Selector All
    // const querryall = document.querySelectorAll ('l1');
    // console.log (querryall);

// In Line Styling
    // const title = document.querySelector('#main-heading');
    // title.style.color = 'red';
    // console.log (title);

// In Line Styling in Multiple Elements
    // const listItems = document.querySelectorAll('.list-items');
    // for (i=0; i<listItems.length; i++){
    //     listItems[i].style.color = 'blue';
    //     listItems[i].style.fontSize = '50px'
    // }
    // console.log (listItems);

// Creating Elements
    // const ul = document.querySelector ('ul');
    // const li = document.querySelector ('li');

//Adding elements
    // ul.append (li);

// Modifying Text
    // li.innerText = 'X-Man';
    // li.setAttribute('id', 'main-heading');
    // li.removeAttribute ('id');

// Traverse te DOM

// Parent Node traversal
    // let ul = document.querySelector ('ul');
    // console.log (ul.parentNode);
    // console.log (ul.parentElement.parentElement);

    // const html = document.documentElement;
    // console.log (html.parentNode);
    // console.log(html.parentElement);

// Child Node Traversal
    // const div = document.querySelector('div');

    // console.log(div.childNodes);

    // console.log(ul.childNodes);
    // console.log (ul.firstChild);
    // console.log (ul.firstElementChild);
    // console.log (ul.previousElementSibling);
    // console.log (ul.nextElementSibling);

// Event Listener
    // const button2 = document.querySelector('.btn-2');
    // button2.addEventListener("click", function AlertBtn(){
    //     alert ('Example2');
    // });

    // const bgcolor = document.querySelector('.box-3');
    // bgcolor.addEventListener("hover", function changeBgColor (){
    //     bgcolor.style.backgroundcolor = 'blue';
    // });

