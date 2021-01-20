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
function printArray(arr){
    for(let i=0;i<arr.length;i++){
        console.log('row '+ i);
        for(let j=0;j<arr[i].length;j++){
            console.log(arr[i][j]);
        }
    }
}
let array=[[1,2,3],[4,5,6],[7,8,9]];
printArray(array);