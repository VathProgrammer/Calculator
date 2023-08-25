function display_value(value){
    document.querySelector("#result").value+=value;
}
function clear_screen(){
    document.querySelector("#result").value=""
}

function calculate() {
    var p = document.querySelector("#result").value;
    var q = eval(p);
    document.querySelector("#result").value = q;
}