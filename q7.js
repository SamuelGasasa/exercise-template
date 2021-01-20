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
function sort(array){
let temp = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (array[j] < array[i]) {
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }
}
return array;
}
let arr=[-1,-4,4,-2,21,7,-5,1];
console.log(sort(arr));