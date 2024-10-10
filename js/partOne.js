const container = document.querySelector(".container");
const button = document.querySelector(".button");

button.addEventListener('click', function()   
 {
    if (container.classList.contains('nombreDelaclase')) {
        container.classList.remove('nombreDelaclase');
    } else {
        container.classList.add('nombreDelaclase');
    }
});
