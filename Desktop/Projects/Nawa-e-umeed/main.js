function loadContent(page){
    fetch(page).then(response=>response.text()).then(data=>{
        document.getElementById('content').innerHTML=data;
    }).catch(error=>console.log('Error while loading content.', error));
}

const images=[
    "IMG_20240829_205118.jpg",
    "IMG_20240829_205205.jpg",
    "IMG_20240829_205216.jpg",
    "IMG_20240829_205319.jpg",
    "IMG_20240829_205148.jpg"

]

let currentindex=0;

function showImage(index){
    const imageElement=document.getElementById('current-image');
    imageElement.src=images[index];
}

function nextImage(){
    currentindex=(currentindex+1)%images.length;
    showImage(currentindex);
}
function prevImage(){
    currentindex=(currentindex-1+images.length)%images.length;
    showImage(currentindex);
}