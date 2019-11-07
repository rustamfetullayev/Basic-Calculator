function set(op) {
    document.getElementById("display").value += op;
}
function answer() {
    var operation = document.getElementById("display");
    var operation1 = operation.value;
    var result = eval(operation1);
    operation.value = result;
}

function c() {
    document.getElementById("display").value="";
}

function ce() {

    var val = document.getElementById("display").value;
    var length = val.length;
    length--;
    var newval = val.substr(0, length);
    document.getElementById("display").value = newval;
}