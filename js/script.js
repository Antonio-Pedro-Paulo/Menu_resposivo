
let ul =document.querySelector('nav ul')
function nome(){
  if(ul.classList.contains('open')){
      ul.classList.remove('open')
     }else{
      ul.classList.add('open')
     }
}
