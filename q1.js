"use strict"
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
let isArr=JSON.parse(input);
if(Array.isArray(isArr)){
    out='is array';
}
else {
    out='is not array';
}

/**/
    output.innerText = out;
}
