let display = document.querySelector(".main-display")
let buttons = document.querySelectorAll("#calcButton");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.value == "=") {
            if (display.value != "") {
                display.value = eval(display.value)
            } else {
                display.value = ""
            }
        } else if (e.target.value == "C") {
            display.value = "";
        } else {
            display.value += e.target.value
        }
    })

})
