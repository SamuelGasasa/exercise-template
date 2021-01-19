"use strict"
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    function checkArr(num)
    {
        let isArr=JSON.parse(num);
        if(Array.isArray(isArr)){
            return 'is array';
        }
        else {
            return 'is not array';
        }
    }
/**/
    out=checkArr(input);
    output.innerText = out;
}
