//1.Write a simple JavaScript program to print expected Output using following array.
let Mycolor: string[] = ["Red", "Green", "White", "Black"];

//Red,Green,White,Black
document.getElementById("ques1_span1")!.innerText = Mycolor.join(",");
//Red+Green+White+Black
document.getElementById("ques1_span2")!.innerText = Mycolor.join("+");
//Red,Green,White
document.getElementById("ques1_span3")!.innerText = Mycolor.slice(0, 3).join(",");
//Red
document.getElementById("ques1_span4")!.innerText = Mycolor[0];
//Green,White
document.getElementById("ques1_span5")!.innerText = Mycolor.slice(1, 3).join(",");
//Red,Green,White,Black,orange
Mycolor.push("orange");
document.getElementById("ques1_span6")!.innerText = Mycolor.join(",");

//2.Write a JavaScript program to get sum of all array element using for loop and foreach loop.
let sum: number[] = [30, 40, 50];
let total: number = 0;
let total2: number = 0;

document.getElementById("ques2_a")!.innerText = sum.join(","); //here, i'm showing given number on the web page

for (let i = 0; i < sum.length; i++) {
    total += sum[i];
}
document.getElementById("ques2_Ans1")!.innerText = total.toString();

//usig foreach loop
sum.forEach(function (value) {
    total2 = total2 + value;
});

document.getElementById("ques2_Ans2")!.innerText = total2.toString();

//3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

let number:number[] = [5, 10, 20, 65, -5];
document.getElementById("ques3")!.innerText = number.toString();

function maxMin() {

    let max = number[0];
    let min = number[0];

    for (let i = 0; i < number.length; i++) {

        if (number[i] > max) {
            max = number[i];
        }

        if (number[i] < min) {
            min = number[i];
        }
    }

    document.getElementById("ques3_Ans1")!.innerText = max.toString();
    document.getElementById("ques3_Ans2")!.innerText = min.toString();

}
maxMin();

//4.Write a JavaScript program for convert all array element in ASCII value.
let arr4:string[] = ["A", "B", "C", "D"];

document.getElementById("ques4")!.innerText = arr4.toString();

for (let i = 0; i < arr4.length; i++) {

    if (i > 0) {
        document.getElementById("ques4_Ans")!.innerText += ",";
    }

    document.getElementById("ques4_Ans")!.innerText += arr4[i]!.charCodeAt(0);

}

//5.Write a JavaScript program for remove negative values using the filter array function.
// numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let ques5:number[] = [-28, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
let Negative:number[]  = ques5.filter(checkNumber);

document.getElementById("ques5")!.innerText = ques5.toString();

function checkNumber(ques5:number){
    return ques5 >= 0;
}

document.getElementById("ques5_Ans")!.innerText = Negative.join(",");

//6. Write a JavaScript program using array map() method and return the  square of array element.
//arr = [2, 5, 6, 3, 8, 9];

const ques6:number[] = [2, 5, 6, 3, 8, 9];
const result6:number[] = ques6.map(SquareNum);

document.getElementById("ques6")!.innerText = ques6.toString();

function SquareNum(num6:number) {

    return num6 * num6

}
document.getElementById("ques6_Ans")!.innerText = result6.join(", ");

//7.Write a JavaScript program for sort array in ascending descending.
//numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];

const ques7:number[] = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
const ascending:number[] = [...ques7].sort(ascending_Num);
const descending:number[] = [...ques7].sort(descending_Num);

function ascending_Num(a:number, b:number) {
    return a - b;
}

function descending_Num(x:number, y:number) {
    return y - x;
}

document.getElementById("ques7")!.innerText = ques7.join(",");
document.getElementById("ques7_Ansa")!.innerText = ascending.join(",");
document.getElementById("ques7_Ansb")!.innerText = descending.join(",");

//8. Write a JavaScript program which filters out any string which is less than 8 characters. 
//words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let words:string[] = ["Java", "Python", "Javascript", "Go", "PHP", "Ruby"];

document.getElementById("ques8")!.innerText = words.toString();// Display the original array

let result8 = words.filter(function (checkChar:string) {

    return checkChar.length >= 8;//  words which have 8 or more characters

});
document.getElementById("ques8_Ans")!.innerText = result8.join(", ");

//9. write a JavaScript program to  to print expected output for following string.

let word9_a: string = "airplane"; // Get the character at index 2
let result9_a:string = word9_a.at(2)!;

document.getElementById("ques9_Ans1")!.innerText = result9_a;

let word9_b: string = "oxoxoxox";// Replace all lowercase x with uppercase X
let result9_b: string = word9_b.replaceAll("x", "X");

document.getElementById("ques9_Ans2")!.innerText = result9_b;

let word9_c:string = "A New Java Book";

document.getElementById("ques9_Ans3")!.innerText = word9_c.toLowerCase();// Convert the string into lowercase
document.getElementById("ques9_Ans4")!.innerText = word9_c.toUpperCase();// Convert the string into uppercase

//10. write a JavaScript program for array reverse.

let ques10: number[] = [2, 3, 10, 15, 20];
document.getElementById("ques10")!.innerText = ques10.join(",");// Display the original array

let result10:number[] = ques10.reverse();
document.getElementById("ques10_Ans")!.innerText = result10.join(",");

//11. write a JavaScript program for check value is found or not?

let ques11:number[] = [10, 20, 30, 40, 50];
document.getElementById("ques11")!.innerText = ques11.join(",");// Display the original array

let checkValue:number = 50;
document.getElementById("ques11_Value")!.innerText = checkValue.toString();

let result11:boolean = ques11.includes(checkValue);
document.getElementById("ques11_Ans")!.innerText = result11.toString();

//12. write a JavaScript program for print your name and write the no of total character.

let ques12:string = "Cristiano";
document.getElementById("ques12")!.innerText = ques12;// Display the original String

let charDigit:number = ques12.length;
document.getElementById("ques12_Ans")!.innerText = charDigit.toString();

//13.  write a JavaScript program given this output using replace concept.
let ques13:string = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning.";
document.getElementById("ques13")!.innerText = ques13;// Display the original String

let replaceWord:string = ques13.replaceAll( "dog", "cat");
document.getElementById("ques13_Ans")!.innerText = replaceWord;

//14.  write a JavaScript program convert string to array.
let ques14:string =  "Hire the top 1% freelance developers";
document.getElementById("ques14")!.innerText = ques14;// Display the original String

let changeString = ques14.split(" ").slice(0, 4);   
document.getElementById("ques14_Ans")!.innerText = changeString.toString();

//15. write a JavaScript program convert for array to string.
let ques15: (string | number)[] =  ['8', 32, 'Daniel'];
document.getElementById("ques15")!.innerText = ques15.toString();// Display the original Array
document.getElementById("ques15_type")!.innerText = Array.isArray(ques15) ? "Array" : typeof ques15;

let changeArray = ques15.toString();
document.getElementById("ques15_Ans")!.innerText = changeArray;
document.getElementById("ques15_Ans_type")!.innerText =(typeof changeArray);
