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
function retrieveProperty(arr,prop){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
    if((typeof arr[i])===prop)
    {
        newArr.push(arr[i]);
    }
}
return newArr;
}
let pr='number';
let array=[1,null,0,'statg',5,false,'ad',undefined];
console.log(retrieveProperty(array,pr));