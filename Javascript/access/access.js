const demo_id = document.getElementById('demo')
// console.log(demo_id)
demo_id.style.border = '2px solid purple';

const demo_class = document.getElementsByClassName('demo');
// demo_class = '2px solid red'
console.log(demo_class)
// demo_class[0].style.border = '2px solid red';
// demo_class[1].style.border = '2px solid red';

for (i = 0; i < demo_class.length; i++) {
    demo_class[i].style.border = '2px solid green'
}

const demo_tag = document.getElementsByTagName('article')

for (a = 0; a < demo_tag.length; a++) {
    demo_tag[a].style.border = '2px solid yellow'
    if (demo_tag[a] = demo_tag[1]) {
        demo_tag[1].style.border = '2px solid pink'
    }
}

const demo_query = document.querySelector('#demo-query')
demo_query.style.border = '2px solid orange'

const demo_query_all = document.querySelectorAll(".demo-query-all")

for (b = 0; b < demo_query_all.length; b++) {
    demo_query_all[b].style.border = '2px solid maroon'
}