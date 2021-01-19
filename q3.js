"ust strict"
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
function first(arr,n){
let myArr=[];
let counter=0;
    while(n>0){
        myArr[counter]=''+arr[counter];
        n--;
        counter++;
}
return myArr; 
}
out=first([11,2,3,4],2);
/**/
output.innerText = out;
}