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

const ratingStars = [...document.getElementsByClassName("rating__star")];
const ratingResult = document.querySelector(".rating__result");

printRatingResult(ratingResult);

function executeRating(stars, result) {
   const starClassActive = "rating__star fas fa-star";
   const starClassUnactive = "rating__star far fa-star";
   const starsLength = stars.length;
   let i;
   stars.map((star) => {
      star.onclick = () => {
         i = stars.indexOf(star);

         if (star.className.indexOf(starClassUnactive) !== -1) {
            printRatingResult(result, i + 1);
            for (i; i >= 0; --i) stars[i].className = starClassActive;
         } else {
            printRatingResult(result, i);
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
         }
      };
   });
}

function printRatingResult(result, num = 0) {
   result.textContent = `${num}/5`;
   // ratingResult.innerHTML=result.textContent;
   console.log(result.textContent)
}

executeRating(ratingStars, ratingResult);