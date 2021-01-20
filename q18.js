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
function binarySearch(arr,num){
    let upper=arr.length-1;
    let bottom=0;
    let mid=Math.floor(upper/2);
    let index=1;
    if(arr[mid]>arr[num]){
        while(arr[num]!==arr[bottom]){
            index++;
            bottom++;
        }
    }
 return index;
}
const array=[0,1,4,7,9,11,15,16,17];
console.log(binarySearch(array,2));