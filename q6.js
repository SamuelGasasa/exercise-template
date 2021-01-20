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
function evenDash(num){
    console.log(num)
    let char=num.charAt(0);
    const array=[(num.charAt(0))];
    for(let i=1;i<num.length;i++){
        if((num.charAt(i)%2==0)&& (num.charAt(i-1)%2==0)){
            array.push('-',num[i]);
        }
        else{
            array.push(num.charAt(i));
        }
    }
    return array.join('');
}
console.log(evenDash('025468 '));
