const menuButton = document.querySelector('.menuIcon');
const navigationBar = document.querySelector('.navigation');
let diplay_menu = true;


menuButton.addEventListener('click' , ()=>{
    if(diplay_menu === true){
    navigationBar.style.display = "flex"
    diplay_menu = false;
    }
    else{
        navigationBar.style.display = "none"
        diplay_menu = true;
    }
    
})

let name_heading = document.querySelector('.name-heading');


const names = "I'm Vaibhav";
for(let i = 0; i < names.length; i++){
    console.log(i);
    
    setTimeout(() => {
        name_heading.innerHTML += names[i];
        console.log(name_heading.innerHTML);
        
    }, i * 100);
    

}

