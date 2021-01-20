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
function union(arr1, arr2){
    let newArr=[];
    let temp;
    let index=0;
    for(let i=0;i<arr1.length;i++){
        temp=arr1[i];
        index=0;
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                index++;
            }
        }
        if(index==0){
            newArr.push(temp);
        }
    }
    for(let i=0;i<arr2.length;i++){
        temp=arr2[i];
        index=0;
        for(let j=0;j<arr1.length;j++){
            if(arr1[i]===arr2[j]){
                index++
            }
        }
        if(index===0){
            newArr.push(temp);
        }
    }
    for(let i=0;i<newArr.length;i++){
        for(let j=i+1;j<newArr.length;j++){
            if(newArr[i]===newArr[j]){
                newArr.splice(i,1);
            }
        }
    }
    temp = 0;
    for (let i = 0; i < newArr.length; i++) {
    for (let j = i; j < newArr.length; j++) {
        if (newArr[j] < newArr[i]) {
        temp = newArr[j];
        newArr[j] = newArr[i];
        newArr[i] = temp;
        }
    }
    }
    return newArr;
}
let arr=union([1,2,3,4,5],[6,7,8,9,10,5,6]);
console.log(arr);