// problem number one //

var fruits = ['Apple', 'Banana', 'Orange'];

var bananaPosition = fruits.indexOf('Banana');
console.log(bananaPosition);

fruits[1] = 'Mango';
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);

// -----------------------problem number two------------------- //


var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;


if (myScore >= 39) {
    if (myScore >= 80) {
        console.log('My Grade is A');
    }
    else if (myScore >= 60) {
        console.log('My Grade is B');
    }
    else if (myScore >= 50) {
        console.log('My Grade is C');
    }
    else if (myScore >= 40) {
        console.log('My Grade is D');
    }
}
else {
    console.log('My Grade Is F')
}
if (tomScore >= 39) {
    if (tomScore >= 80) {
        console.log('Tom Grade is A');
    }
    else if (tomScore >= 60) {
        console.log('Tom Grade is B');
    }
    else if (tomScore >= 50) {
        console.log('Tom Grade is C');
    }
    else if (tomScore >= 40) {
        console.log('Tom Grade is D');
    }
}
else {
    console.log('Tom Grade Is F')
}

if (janeScore >= 39) {
    if (janeScore >= 80) {
        console.log('Janes Grade is A');
    }
    else if (janeScore >= 60) {
        console.log('Janes Grade is B');
    }
    else if (janeScore >= 50) {
        console.log('Janes Grade is C');
    }
    else if (janeScore >= 40) {
        console.log('Janes Grade is D');
    }
}
else {
    console.log('Janes Grade Is F')
}


if (peterScore >= 39) {
    if (peterScore >= 80) {
        console.log('Peters Grade is A');
    }
    else if (peterScore >= 60) {
        console.log('Peters Grade is B');
    }
    else if (peterScore >= 50) {
        console.log('Peters Grade is C');
    }
    else if (peterScore >= 40) {
        console.log('Peters Grade is D');
    }
}
else {
    console.log('Peters Grade Is F')
}
if (johnScore >= 39) {
    if (johnScore >= 80) {
        console.log('Johns Grade is A');
    }
    else if (johnScore >= 60) {
        console.log('Johns Grade is B');
    }
    else if (johnScore >= 50) {
        console.log('Johns Grade is C');
    }
    else if (johnScore >= 40) {
        console.log('Johns Grade is D');
    }
}
else {
    console.log('Johns Grade Is F')
}


//--------------------- Practice Problem 3------------------------------- //

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log('The largest number is' + ' ' + num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log('The largest number is' + ' ' + num2);
}
else {
    console.log('The largest number is' + ' ' + num3);
}

///----------------- practice problem 4------------------------------///


var side1 = 9;
var side2 = 8;
var side3 = 7;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('Isosceles');

}
else {
    console.log('not Isosceles');
}
