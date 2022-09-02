let container = document.querySelector(".container");
let demo = document.querySelector("#mainbtn");
let cancel = document.querySelector("#cancelbtn")



demo.addEventListener("click",function() {
    container.style.display="flex"
    // container.classList.remove('displayNone')
})

cancel.addEventListener("click",function() {
    container.style.display="none"
})


// let obj = {
//     movie:'ironman',
//     imgLink:'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_mas_mob_collection_01.jpg',
//     head1:'category',
//     head2:'imdb',
//     videoLink:'https://www.youtube.com/watch?v=KAE5ymVLmZg',
//     actor:'rdj',
//     director:'chauhan'
// }

let btn = document.querySelector('#addbtn')
btn.addEventListener('click',(event)=>{
        add(event)
        container.classList.add('displayNone')
})
const data = [];
const displayitem = document.querySelector('#displayitem');
function add(event) {
    let mname = document.querySelector('#mname').value
    let rate = document.querySelector('#rate').value
    let ilink = document.querySelector('#ilink').value
    let selectbtn = document.querySelector('#selectbtn').value
    let tlink = document.querySelector('#tlink').value
    let aname = document.querySelector('#aname').value
    let dname = document.querySelector('#dname').value

    var obj ={
        movie:mname,
        imgLink:ilink,
        head1:selectbtn,
        head2:rate,
        videoLink:tlink,
        actor:aname,
        director:dname
    }
   data.push(obj)
   showData(data)
}

function showData(array) {
    container.innerHTML=null
    array.map((d)=>{
let div = document.createElement('div');
let h3 = document.createElement('h3');
let img = document.createElement('img');
let category = document.createElement('p');
category.textContent = obj.head1
let rating = document.createElement('p');
rating.textContent = obj.head2

let videoLink = document.createElement('a');
videoLink.textContent = obj.videoLink
let asearch = document.createElement('p');
let dsearch = document.createElement('p');

h3.textContent = obj.movie
img.setAttribute('src', obj.imgLink)
category.textContent = obj.head1
videoLink.setAttribute('href',obj.videoLink)
asearch.textContent = obj.actor
dsearch.textContent = obj.director
div.append(h3,img,category,rating,videoLink,asearch,dsearch)

displayitem.append(div) 
    })
}



