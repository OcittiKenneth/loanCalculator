// A function for calculation with event handler submit

document.getElementById("myForm").addEventListener("submit", myFunction);

function myFunction(e) {
    console.log("calculating.....");

    // accessing html elements by their ids and giving them variables
    const amount = document.getElementById("amount_loan");
    const interest = document.getElementById("annual_interest");
    const repayment = document.getElementById("repayment_period");
    const monthlyPayment = document.getElementById("monthpayment");
    const totalPayment = document.getElementById("totalPayment");
    const totalInterest = document.getElementById("totalInterest");

    // computation of payment and interest
    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(repayment.value) * 12;

    // computing monthly payment
    const ken = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principle * ken * calculatedInterest) / (ken - 1)

    // zipcode specification
    const zipcode = document.getElementById("zipcod");
    const zip = /^[0-9]{5}$/;
    if (zipcode.value.match(zip)) {

    } else {
        document.getElementById("promt").innerHTML = "5 digits to calculate";
        return false;
    }


    // seting conditions for payments and interest
    if (isFinite(monthly)) {
        monthlyPayment.value = `$${monthly.toFixed(2)}`;
        totalPayment.value = `$${((monthly * calculatedPayment).toFixed(2))}`;
        totalInterest.value = `$${((monthly * calculatedPayment) - principle).toFixed(2)}`;
    } else {

    }

    e.preventDefault();
};