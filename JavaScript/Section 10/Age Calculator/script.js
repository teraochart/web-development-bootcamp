var ageYears = prompt("What is your age?");
var leapDays = ageYears / 4;
var ageDays = Math.round((ageYears * 365) + leapDays);
alert ("You have been alive roughly " + ageDays + " days!")
console.log(ageDays);

