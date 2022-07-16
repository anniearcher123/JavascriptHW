//Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

function tipAmount (amount, service) {
    if (service === "good") {
        return amount * .20
    }
    else if (service === "fair") {
        return amount * .15
    }
    else if (service === "bad") {
        return amount * .10
    }
}


function totalAmount(amount, service) {
    return tipAmount(amount, service) + amount;
    
}

function splitAmount(amount, service, people) {
    return totalAmount(amount, service) / people;
}

console.log(splitAmount(200, "fair", 3));