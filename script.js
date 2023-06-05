const buttons = document.querySelectorAll(".data-number");
const screen = document.querySelector(".screen");

// Action if one of the buttons is clicked.
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        appendNumber(button.textContent)})
})

// Function to add the content to the screen each time a button is clicked:
function appendNumber(number){
    screen.textContent += number;
}

