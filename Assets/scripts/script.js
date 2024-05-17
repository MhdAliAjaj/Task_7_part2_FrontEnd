const inp_img1=document.querySelector('.img1');//b4c9da
const inp_img2=document.querySelector('.img2');
const inp_img3=document.querySelector('.img3');
const inp_img4=document.querySelector('.img4');
const inp_img5=document.querySelector('.img5');

const body=document.querySelector('.sec1');
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



///////////////////////////////////////Task 2///////////////////////////////////////
function myFunction() {
    var element = document.querySelector('.sec2');   
    element.classList.toggle("dark-mode");
    let icon=document.querySelector('.icon_mode');
    if (icon.style.color=="white") {
        icon.style.color="black";
    }
    else
    icon.style.color="white";
 }


///////////////////////////////////////Task 3///////////////////////////////////////
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener(
        "click",
        function() {
            this.classList.toggle("active")
            var panel = this.nextElementSibling
            if ( panel.style.maxHeight ) {
                panel.style.maxHeight = null
            } else {
                panel.style.maxHeight = (panel.scrollHeight + "px")
            } 
        }
    )
}

///////////////////////////////////////Task 4///////////////////////////////////////
// const star1_inp=document.querySelectorAll('.star');

// star1_inp.addEventListener('click',(event)=>{
//     star1_inp.style.color="#fed600";
// });


const star1_inp=document.querySelector('#star1');

star1_inp.addEventListener('mouseover',(event)=>{
    
    
        // star1_inp.style.color.rgb(254, 214, 0);
        star1_inp.style.color="#fed600";
 
});




const star2_inp=document.querySelector('#star2');

star2_inp.addEventListener('mouseover',(event)=>{
    star2_inp.style.color="#fed600";
});
const star3_inp=document.querySelector('#star3');

star3_inp.addEventListener('mouseover',(event)=>{
    star3_inp.style.color="#fed600";
});
const star4_inp=document.querySelector('#star4');

star4_inp.addEventListener('mouseover',(event)=>{
    star4_inp.style.color="#fed600";
});
const star5_inp=document.querySelector('#star5');

star5_inp.addEventListener('mouseover',(event)=>{
    star5_inp.style.color="#fed600";
});