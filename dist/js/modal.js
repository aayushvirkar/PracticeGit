let galleryImages = document.querySelectorAll('.item');
let getLatestOpenedImg;
let getLatestOpenedImg1;
let openedImage;
let windowWidth = window.innerWidth;

galleryImages.forEach(function(image,index){
    image.onclick = function() {
        getLatestOpenedImg = index + 1;
        
        let container = document.body;
        let newImgWindow = document.createElement('div');
        container.appendChild(newImgWindow);

        newImgWindow.setAttribute('class','img-window');

        let newImg = image.firstElementChild.cloneNode();
        newImgWindow.appendChild(newImg);
        newImg.classList.add('popup-img');
        newImg.setAttribute('id','current-img');
        
        newImg.onload = function() {

             openedImage = getLatestOpenedImg;

            let newNextBtn = document.createElement('a');
            newNextBtn.innerHTML = '<i class="fas fa-angle-right"></i>';
            container.appendChild(newNextBtn);
            newNextBtn.setAttribute('class','img-btn-next');
            newNextBtn.setAttribute('onclick','changeImg(1)');

            let newPrevBtn = document.createElement('a');
            newPrevBtn.innerHTML = '<i class ="fas fa-angle-left"></i>';
            container.appendChild(newPrevBtn);
            newPrevBtn.setAttribute('class','img-btn-prev');
            newPrevBtn.setAttribute('onclick','changeImg(0)');
        }

        newImgWindow.addEventListener("click",function(){

            document.querySelector('.img-window').remove();
            document.querySelector('.img-btn-next').remove();
            document.querySelector('.img-btn-prev').remove();

        })

        newImg.addEventListener("click",function(ev){
            ev.stopPropagation();},false);
    }
    
})

function changeImg(change) {

    document.querySelector('#current-img').remove();

    let getImgWindow = document.querySelector('.img-window');
    let newImg = document.createElement('img');
    getImgWindow.appendChild(newImg);

    let calcNewImg=0;
    
    if(change == 1)
     {
         calcNewImg = getLatestOpenedImg + 1;
     }
     else if(change == 0)
     {
         calcNewImg = getLatestOpenedImg -1;
     }

console.log(calcNewImg);
console.log(getLatestOpenedImg);

if(calcNewImg == 0)
    {  
        calcNewImg = 1;
    }

switch(openedImage) {
    
    case 1: 
        if(calcNewImg > 10)
            calcNewImg = 1;
            
            break;
    case 2:
            calcNewImg =1;
            if(calcNewImg >4)
                calcNewImg=1;
            
                break;
}

newImg.setAttribute('src','img/project/project-'+ openedImage + '/' + calcNewImg +'.jpg');
newImg.setAttribute('class','popup-img');
newImg.setAttribute('id','current-img');

getLatestOpenedImg = calcNewImg;

console.log(getLatestOpenedImg);
}

