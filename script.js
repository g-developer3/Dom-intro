/*
let a = document.querySelector('h2');
let b = document.querySelector('html');

a.addEventListener('click',function(){
a.innerHTML= 'Document Object Model';
a.style.fontFamily='arial';
a.style.color='white';
})
b.addEventListener('click',function(){
    b.style.backgroundColor= 'grey';
});

let blub = document.querySelector('#bulb');
let btn = document.querySelector('button');
let flag = 0;
btn.addEventListener('click',()=> {
   if(flag===0){
       blub.style.backgroundColor='yellow';
       flag=1;
   }else{
blub.style.backgroundColor='transparent';
flag=0;
   }
})
*/


// let h = document.querySelectorAll('h1');
// console.log(h);

// h.forEach((e)=>console.log(e));

let m = document.getElementById('xob');
m.innerHTML= 'Hii World';
m.textContent = 'Hey World';
m.innerHTML = '<i>Helo duniya</i>';