function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    // out = input + 5;

/**/
    output.innerText = out;
}
function remove(arr){
    for(let i=0;i<arr.length;i++){
        if((typeof  (arr[i])!='number')&&(typeof (arr[i])!='string')){
            console.log(arr[i]);
            arr.splice(i,1);
        }
    }
    return arr;
}
let array=[1,2,5,null,'asf',undefined,7,9,false,];
console.log(remove(array));
// console.log(typeof array[3] );