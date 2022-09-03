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
        // container.classList.add('displayNone')
})

let categorybtn = document.querySelector('#categorybtn');
categorybtn.addEventListener('change',filterData)
 let sortbtn = document.querySelector('#imdbbtn')
 sortbtn.addEventListener('click', sortme)
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

function filterData() {
    let val = categorybtn.value
    let filteredData = data.filter((d)=>{
        return d.head1 === val
    })
    showData(filteredData)
}

function sortme() {
    let sortedData = data.sort((a,b)=>{
        return b.head2-a.head2
    })
    // console.log(sortedData)
    showData(sortedData)
}


function showData(array) {
    console.log(array)
    displayitem.innerHTML=null
    array.map((d)=>{
let div = document.createElement('div');
let h3 = document.createElement('h3');
let img = document.createElement('img');
let category = document.createElement('p');
category.textContent = d.head1
let rating = document.createElement('p');
rating.textContent = 'IMDB Rating'+':-'+d.head2

let videoLink = document.createElement('a');
videoLink.textContent = d.videoLink
let asearch = document.createElement('p');
let dsearch = document.createElement('p');

h3.textContent ='movie Name'+':-'+ d.movie
img.setAttribute('src', d.imgLink)
category.textContent ='Category'+':-'+ d.head1
videoLink.setAttribute('href',d.videoLink)
asearch.textContent = 'Actor Name'+':-'+ d.actor
dsearch.textContent = 'Director Name'+':-'+d.director
div.append(h3,img,category,rating,videoLink,asearch,dsearch)

displayitem.append(div) 
    })
}



