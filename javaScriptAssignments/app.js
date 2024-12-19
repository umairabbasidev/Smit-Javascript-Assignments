// console.log("Hello World!");
// Chapter 1(ALERTS)

// Q-1
// alert("Hi, welcome to every one!");

// Q-2
// alert("Error! Please enter a valid password.");

// Q-3
// alert("Welcome to JS Land...\nHappy Coding!")

// Q-4
/*
alert("Welcome to JS Land...");
alert("Happy Coding!");
*/

// Q-5
// console.log("Hello... I can run JS through my web browser's console")

// Q-6
// alert("Javascript is my favourite programming language.")

// Q-7
// continue in the html document page.

// *********** Chapter 1 exercises completed **************

// Chapter 2(VARIABLES FOR STRINGS)

// Q-1
// let username;

// Q-2
// let myName = "Muhammad Umair Abbasi";

// Q-3(a)
// let message;
// Q-3(b)
// message = "Hello World";
// Q-3(c)
// alert(message);

// Q-4
/*
let fullName  = "Muhammad Umair abbasi";
let age = "22 years old";
let goal2025 = "Future Software Engr. InshaAllah";
alert(fullName);
alert(age)
alert(goal2025)
*/

// Q-5
/*
let alphabet = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(alphabet);
*/

// Q-6
/*
let email = "muhammadumairabbasi637@gmail.com";
alert("My email address is " + email);
*/

// Q-7
/*
let book = "A smarter way to learn JavaScript.";
alert("I  am  trying to learn Javascript from the Book "+ book)
*/

// Q-8
// document.write("<h1>Yah! i can write HTML content through Javascript</h1>");

// Q-9
/*
let str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(str);
document.write(str);
*/

// *********** Chapter 2 exercises completed **************

// Chapter 3(VARIABLES FOR NUMBERS)

// Q-1
/*
let age = 22;
alert("I am " + age + " years old");
*/

// Q-2
/*
let count = 14;
alert("You have visited this site " + count + " times");
*/

// Q-3
/*
let birthYear = 2002;
document.write(`<p>My birth year is ${birthYear} <br /> Data type of my declared variable is   ${typeof birthYear} </p>`);
*/

// Q-4
/* 
let storeName = "www.xyzClothing.com";
let visitorName = "John Doe";
let productName = "T-shirt(s)";
let productQuantity = 5;
document.write(`<p><strong>${visitorName}</strong> ordered <strong>${productQuantity} ${productName}</strong> on ${storeName}. </p>`);
*/

// *********** Chapter 3 exercises completed **************

// Chapter 4(VARIABLE NAMES: LEGAL & ILLEGAL)

// Q-1

// let var1 = var2 = var3;

// Q-2
// 5 legal variable names.

/*
let var1 = 1;
let variableName2 = "umair";
let $3 = true;
let _4 = undefined;
let variable_Name5;
*/

// Q-2
// 5 illegal variable names.

// let 123 = "umair";
// let var-2 = true;
// let var 3 = 123;
// let & = "123";
// let null = undefined;

// Q-3
/*
document.write(`<h1>Rules for naming JS variables</h1> <br />  
    <p>
    Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable<br />
    Variable must begin with a letter, $ or _. For example: $name, _name or name<br />
Variable names are case sensitive<br />
Variable names should not be JS keywords<br />
    </p>`);
*/

// *********** Chapter 4 exercises completed **************

// Chapter 5(MATH EXPRESSIONS)

// Q-1
/*
let num1 = Number(prompt("Enter your first number", 5));
let num2 = Number(prompt("Enter your second number", 10));
let sum = num1 + num2;

// Q-2 

let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;
document.write(`<p>
    Sum of ${num1} and ${num2} is ${sum}<br/>
    Subtraction of ${num1} from ${num2} is ${subtraction}<br />
    Multiplication of ${num1} and ${num2} is ${multiplication}<br />
    Division of ${num1} by ${num2} is ${division}<br />
    Modulus of ${num1} and ${num2} is ${modulus}<br />
</p>`);
*/

// Q-3
// a
/*
let myVar;
document.write(`Value after variable declarion is ${myVar} <br/>`);
// b
myVar = 5;
document.write(`Initial value : ${myVar} <br/>`);
// c
myVar++;
document.write(`Value after increment is : ${myVar} <br/>`);
// d
myVar += 7;
document.write(`Value after addition of 7 is : ${myVar} <br/>`);
// e
myVar--;
document.write(`Value after decrement is : ${myVar} <br/>`);
// f
document.write(`The remainder is : ${myVar % 3}`);
*/

// Q-4
/*
let ticketPrice = 600;
document.write(`<p>Total cost of buy 5 tickets to a movie is  ${ticketPrice * 5}PKR</p>`) 
*/

// Q-5
/*
let tableNumber = Number(prompt("Enter your favourite table number", 5));
document.write(`Table of ${tableNumber}<br/>`);
for (let i = 1; i <= 10; i++) {
  document.write(`${tableNumber} x ${i} = ${tableNumber * i}<br/>`);
}
*/

// Q-6
// a
/*
let celsiusTemp = Number(prompt("Enter your temperature in celsius", 25));
let convertCelsiusToFahrenheit = (celsiusTemp * 9) / 5 + 32;
// b
let fahrenheitTemp = Number(prompt("Enter your temperature in fahrenheit", 77));
let convertFahrenheitToCelsius = (fahrenheitTemp - 32) * 5 / 9;

document.write(`<p>
    ${celsiusTemp}°C is ${convertCelsiusToFahrenheit}°F <br />
    ${fahrenheitTemp}°F is ${convertFahrenheitToCelsius}°C
    </p>`)
*/

// Q-7
/*
let item1 = Number(prompt("Enter the price of item 1", 650));
let item2 = Number(prompt("Enter the price of item 2", 100));
let item1Quantity = Number(prompt("Enter the quantity of item 1", 3));
let item2Quantity = Number(prompt("Enter the quantity of item 2", 7));
let shippingCharges = Number(prompt("Shipping Chargers", 100));
document.write(`<h1>Shopping Cart</h1> <br /><p>
    Price of item 1 is ${item1}<br />
    Quantity os item 1 is ${item1Quantity}<br />
    Price of item 2 is ${item2} <br/>
    Quantity of item 2 is ${item2Quantity}<br />
    Shipping Charegs ${shippingCharges}<br /><br />
    Total cost of your order is ${(item1 * item1Quantity + item2 * item2Quantity) + shippingCharges}
    </p>`);
*/

// Q-8

/*    
let totalMarks = Number(prompt("Enter your total marks",980));
let obtainedMarks = Number(prompt("Enter your obtained marks",804));
let percentage = (obtainedMarks / totalMarks) * 100;
let fixedTwoDecimal = percentage.toFixed(2)
document.write(`<h1>Marks Sheet</h1><br/><br/> <p>
    Total marks: ${totalMarks}<br />
    Marks obtained: ${obtainedMarks}<br />
    Percentage:  ${fixedTwoDecimal}%
    </p>`)
    */

// Q-9
/*    
let usCurrency = 10;
let saudiCurrency = 25;
let totalInRs = (281.36 * usCurrency) + (74.02 * saudiCurrency);
document.write(`<h1>Currency in PKR <br /> <br /></h1>
    <p>
    Total Currency in PKR: ${totalInRs}
</p>`)
    */

// Q-10

/* 
let num = 10;
let arithmeticOperations = ((num + 10) * 10 ) / 2;
alert(arithmeticOperations);
*/

// Q-11
/*
let currenntYear = Number(prompt("Enter current year",2024));
let birthYear = Number(prompt("Enter your birth year",2002));
let calculateAge = currenntYear - birthYear;
// alert(calculateAge)
console.log(calculateAge);
document.write(`<h1>Age Calculator</h1><br /><br />
    <p>
    Current Year: ${currenntYear}<br/>
    Birth Year: ${birthYear}<br/>
    Your Age is: ${calculateAge}
    </p>`)
*/

// Q-12
// a
/*
let circleRadius = 5;
let circumference = (2 * 3.142 * circleRadius).toFixed(2);
let area = (3.142 * (circleRadius * circleRadius)).toFixed(2)
console.log(circleRadius);
// b
document.write(`<h1>The Geometrizer</h1><br /><br/>
    <p>
        Radius of a circle: ${circleRadius}<br />
        The circumference is: ${circumference}<br />
        The area is: ${area}
    </p>
    `);
*/

/*
let favSnack = "chocolato biscuits";
let currentAge = 22;
let maxAge = 80;
let estimatedAmountPerDay = 2;
let supplyCalculator = (maxAge - currentAge) * 2;

document.write(`<h1>The Lifetime Supply calculator</h1><br/><br/>
        <p>
            Favourite Snack: ${favSnack}<br/>
            Current age: ${currentAge}<br/>
            Estimated Maximum age: ${maxAge}<br/>
            Amount of snacks per day: ${estimatedAmountPerDay}<br/>
            You will need ${supplyCalculator} ${favSnack} to last you until the ripe old age of ${maxAge}
    </p>`);
*/

// *********** Chapter 5 exercises completed **************

// Chapter 6-9(MATH EXPRESSIONS)

// Q-1

/*
let MyNum = 10;
document.write(`<p>Result:<br/>
    The value of MyNum is: ${MyNum}<br/>
    ------------------------------------<br/><br/>
    The value of ++myNum is: ${++MyNum}<br/>
    Now the value of myNum is: ${MyNum}<br/><br/><br/>
    The value of myNum++ is:${MyNum++}<br/>
    Now the value of myNum is:${MyNum}<br/><br/>
    The value of --myNum is:${--MyNum}<br/>
    Now the value of myNum is:${MyNum}<br/><br/>
    The value of myNum-- is:${MyNum--}<br/>
    Now the value oa myNum is:${MyNum}
    </p>`);
*/

// Q-2

/*
let a = 2;
let b = 1;
let result = --a - --b + ++b + b--;
console.log(result); // 3
// explanation
// 1 - 0 = 1, 1 + 1 + 1 = 3;
*/

// Q-3
// let user  = prompt("Enter your name");
// alert(`Hi, ${user.toUpperCase()} How are you?`)

// Q-4
/*
let userNum = Number(prompt("Enter your fav number, than programe will generate table. ", 5));

document.write(`table of ${userNum} <br/>`)
for (let i = 1; i <= 10; i++) {
    document.write(`${userNum} x ${i} = ${userNum * i} <br />`)
}
*/

let table = document.querySelector("#table");

let sub1 = prompt("Enter your first subject name.", "Science");
let sub2 = prompt("Enter your second subject name.", "Arts");
let sub3 = prompt("Enter your third subject name.", "Social Studies");
let sub4 = prompt("Enter your fourth subject name.", "Math's");
let eachSubTotalMarks = 200;
let obtFirstSubMarks = Number(prompt("Enter your first subject obtained marks", 166));
let obtSecondSubMarks = Number(prompt("Enter your second subject obtained marks", 153));
let obtThirdSubMarks = Number(prompt("Enter your third subject obtained marks", 167));
let obtFourthSubMarks = Number(prompt("Enter your fourth subject obtained marks", 167));

// let avg = (((obtFirstSubMarks / 200 ) * 100) + ((obtSecondSubMarks / 200 ) * 100) + ((obtThirdSubMarks / 200 ) * 100) + ((obtFourthSubMarks / 200 ) * 100)) / 4

// improvement avg calcualtion  from above line
let avg = ((obtFirstSubMarks + obtSecondSubMarks + obtThirdSubMarks + obtFourthSubMarks) / 800) * 100;
table.innerHTML = `
 <tr>
     <th>Subjects</th>
     <th>Total Marks</th>
     <th>Obtained Marks</th>
     <th>Percentge(%)</th>       
    </tr>
    <tr>
        <td>${sub1}</td>
        <td>${eachSubTotalMarks}</td>
        <td>${obtFirstSubMarks}</td>
        <td>${(obtFirstSubMarks / 200) * 100}%</td>
       
    </tr>  

   <tr>
        <td>${sub2}</td>
        <td>${eachSubTotalMarks}</td>
        <td>${obtSecondSubMarks}</td>
        <td>${(obtSecondSubMarks / 200) * 100}%</td>
        
    </tr>  
     <tr>
        <td>${sub3}</td>
        <td>${eachSubTotalMarks}</td>
        <td>${obtThirdSubMarks}</td>
        <td>${(obtThirdSubMarks / 200) * 100}%</td>
    </tr> 
      <tr>
        <td>${sub4}</td>
        <td>${eachSubTotalMarks}</td>
        <td>${obtFourthSubMarks}</td>
        <td>${(obtFourthSubMarks / 200) * 100}%</td>
    </tr>  
       <tr>
        <td><strong>4 subjects</strong></td>
        <td><strong>${eachSubTotalMarks + eachSubTotalMarks + eachSubTotalMarks + eachSubTotalMarks}</strong></td>
        <td><strong>${obtFirstSubMarks + obtSecondSubMarks + obtThirdSubMarks + obtFourthSubMarks}</strong></td>
        <td><strong>${avg}%</strong></td>
    </tr>


`;
