//Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

//good -> 20%

//fair -> 15%

//bad -> 10%


function tipAmount (amount, service) {
    if (service === "good") {
        console.log(amount * .20)
    }
    else if (serce === "fair") {
        console.log(amount * .15)
    }
    else if (service === "bad") {
        console.log(amount * .10) 
    }
}

tipAmount (100, "good");
