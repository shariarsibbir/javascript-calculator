// Get the Variable from the input box
function screen(num) {
    document.getElementById('display').value = num;
}

// Concatenating Values
function shownum(num){
    document.getElementById('display').value += num;
}

// Performing the Calcuulation
function solve() {
    try {
        screen(eval(document.getElementById('display').value));
    }
    catch (e) {
        screen('Error');
    }
}

//clear input screen
function clearme(){
    document.getElementById('display').value = '';
}