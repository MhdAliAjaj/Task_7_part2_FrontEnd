const inp_img1=document.querySelector('.img1');//b4c9da
const inp_img2=document.querySelector('.img2');
const inp_img3=document.querySelector('.img3');
const inp_img4=document.querySelector('.img4');
const inp_img5=document.querySelector('.img5');

const body=document.querySelector('body');
inp_img1.addEventListener('click',(event)=>{
    body.style.backgroundColor = "#b4c9da";
});
inp_img2.addEventListener('click',(event)=>{
    body.style.backgroundColor = "#c16e38";
});
inp_img3.addEventListener('click',(event)=>{
    body.style.backgroundColor = "#6c6988";
});
inp_img4.addEventListener('click',(event)=>{
    body.style.backgroundColor = "#263425";
});
inp_img5.addEventListener('click',(event)=>{
    body.style.backgroundColor = "#383e4e";
});