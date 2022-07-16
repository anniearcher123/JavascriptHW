//Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

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

const total = totalAmount(100, "good");

console.log(total);