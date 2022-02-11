


function calculateBoole(array:number[],b:number,a:number) {

    let list: boolean[];

    array.forEach((element,index)=> {
let value :Number;
        value = array[index] /(index +1)  
        if (value<=b && value >=a) {
           // list.push(true);
            console.log("true");

        } else{
            console.log("false");
        }   });
}

let  numbers : number[]=[100];

let a = 1;
let b  = 1000;

calculateBoole(numbers,b,a);