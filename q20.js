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
function duplicate(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                newArr.push(arr[i]);
            }
        }
    }
    for(let s=0;s<newArr.length;s++){
        for(let a=s+1;a<newArr.length;a++){
            if(newArr[s]===newArr[a]){
                newArr.splice(a,2);
            }
        }
    }
    return newArr;
}
let array=[1,2,3,5,1,4,6,5,2,7,9,124,616,164,13,16,13,1,1];
console.log(duplicate(array));