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
function leapYear(num1,num2){
    let arrYear=[];
    if(num1<num2){
        while(num1<num2){
            if(num1%4===0 &&num1%100!==0)
            {
                arrYear.push(num1);
            }
            if(num1%400===0)
            {
                arrYear.push(num1);
            } 
            num1++;
        }
    }
    while(num2<num1){
        if(num2%4===0 &&num2%100!==0)
        {
            arrYear.push(num2);
        }
        if(num2%400===0)
        {
            arrYear.push(num2);
        }
        num2++; 
    }
    return arrYear;
}
console.log(leapYear(1600,1750));