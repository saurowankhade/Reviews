const leftBtn = document.querySelector('.left_btn');
const rightBtn = document.querySelector('.right_btn');

const img = document.querySelector('img');
const userName = document.querySelector('.user_name');
const userRole = document.querySelector('.user_role');
const userAbout = document.querySelector('.user_about');

const slider = document.querySelector('.slider');

const data = [
    {'imgSrc' : 'Media/user1.jpg',
    'userName' : 'Tom Buluchka',
    'userRole':'Designer','userAbout' : `Design Info didn’t begin its ventures with the name of Design Info. The timeline goes back to 1969 when Saremal began his first venture in Mumbai as a supplier of books at the age of 17. The genre was mainly textiles & fashion magazines.`},


    {'imgSrc' : 'Media/user2.jpg',
    'userName' : 'Tim Brim','userRole':'Web-Developer','userAbout' : `Pricinples of honesty and hardwork with numerous travel tripos accross the country imporved the presence of the company. Textile forecast books and fashion color forecast books were major additions in the 80s. `},


    {'imgSrc' : 'Media/user3.jpg',
    'userName' : ' Johnny Depp','userRole':'Software Engineer','userAbout' : `Brand name “Design Info” was launched in 2008 when BSA decided to venture into photography as an addition to the existing color management business and cater to all professionals in this segment.  `},
];

let counter = 0;

window.addEventListener('DOMContentLoaded',()=>{
    setData();
});

rightBtn.addEventListener('click',()=>{
    setData();
    slider.classList.add('aniNext');
    slider.addEventListener('animationend',()=>{
        slider.classList.remove('aniNext');
    });
    
    if(counter === data.length-1) counter = 0;
    else counter++;
});


leftBtn.addEventListener('click',()=>{
    setData();
    slider.classList.add('aniPre');
    slider.addEventListener('animationend',()=>{
        slider.classList.remove('aniPre');
    });

    if(counter === 0) counter = data.length-1;
    else counter--;
    
});



function setData(){
    let obj = data[counter];
    img.src = obj.imgSrc;
    userName.innerText = obj.userName;
    userRole.innerText = obj.userRole;
    userAbout.innerText = obj.userAbout;
}

    window.onload = data1;

function data1(){

    let obj = data[counter];
    img.src = obj.imgSrc;
    userName.innerText = obj.userName;
    userRole.innerText = obj.userRole;
    userAbout.innerText = obj.userAbout;

    slider.classList.add('aniNext');
    slider.addEventListener('animationend',()=>{
        slider.classList.remove('aniNext');
    });

    if(counter<data.length-1){
        counter++;
    }else{
        counter=0;
    }

    setTimeout("data1()",5000);
}