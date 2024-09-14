const toggleButton = document.getElementById('hide') as HTMLButtonElement
const Skills2 = document.getElementById('Skills2') as HTMLElement
toggleButton.addEventListener( 'click',  ()=> {
    if(Skills2.style.display === 'none') { 
        Skills2.style.display = 'block'
    } else {
        Skills2.style.display = 'none'
    }
});