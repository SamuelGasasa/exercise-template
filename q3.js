"ust strict"
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
out=first([11,2,3,4],2);
/**/
output.innerText = out;
}
function first(arr,n){
let myArr=[];
for(let i=0;i<n;i++){
    myArr.push(arr[i]);
}
return myArr; 
}
