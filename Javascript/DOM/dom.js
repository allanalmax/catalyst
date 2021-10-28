/*DOM- Document Object Modelling.
DOm defines how third parties manipulate HTML.
looking at a webpage as an object.
a webpage is also a document.
*/

/**properties of a document
 * name: index.html
 * type: doctype
 * format: tags<>
 * title: my document
 * body: <body></body>
 * content: pictures, text, videos...
 * sections: title, head, body
 */




const h1 = document.getElementsByTagName('h1')[0];
const p = document.getElementsByTagName('p')[0];
const ul = document.getElementsByTagName('ul')[0];

ul.firstElementChild.style.background = 'green';

for (Element of ul.children) {
    Element.style.background = 'yellow'
    // if (Element[0]) {
    //     Element[0].style.background = 'red'
    // }
}

// document.body.children[2].lastElementChild.style.background = 'fuchsia'

// const unorderdlist = ul.children[1].style.background = 'red';
const unorderdlist = ul.children[1]

unorderdlist.previousElementSibling.style.background = 'aquamarine'
unorderdlist.nextElementSibling.style.background = 'coral'
