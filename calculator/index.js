const clearBtn = document.getElementById("clear-btn");
let inputEl = document.getElementById("input-el");

function display(value){
    if (inputEl.value == 'Error'){
        inputEl.value = value
    }
    else {
        inputEl.value += value
    }
}

function calculate(){
    // if (inputEl.value == undefined){
    //     inputEl.value = ''
    // }
    // else {
    //     let result = eval(inputEl.value)
    //     inputEl.value = result
    // }
    // let result = eval(inputEl.value)
    // inputEl.value = result
    if (inputEl.value == '') {
        inputEl.value = 'Error'
    } else if (inputEl.value == 'Error') {
        inputEl.value = ''
    }
    else {
        let result = eval(inputEl.value)
        inputEl.value = result
    }
}

clearBtn.addEventListener("click", function(){
    inputEl.value = ''
})