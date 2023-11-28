// // use const for creating array

// // heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana");
// console.log(fruits);


// Scenario 1 - Buying Groceries
function buyGroceries() {
    const choice = prompt("Do you want to buy fruits or vegetables?").toLowerCase();

    if (choice === "fruits") {
        const fruitChoice = prompt("Which fruit would you like to buy? (apple, banana, orange)").toLowerCase();
        let price;

        switch (fruitChoice) {
            case "apple":
                price = 2.5;
                break;
            case "banana":
                price = 1.5;
                break;
            case "orange":
                price = 3.0;
                break;
            default:
                console.log("Invalid fruit choice");
                return;
        }

        const quantity = parseInt(prompt("How many kilograms would you like to buy?"));
        const totalBill = price * quantity;
        console.log(`You bought ${quantity} kg of ${fruitChoice} for $${totalBill.toFixed(2)}`);
    } else if (choice === "vegetables") {
        // Similar logic for vegetables
        // ...

    } else {
        console.log("Invalid choice");
    }
}

// Scenario 2 - Checking Discounts
function applyDiscount(totalBil ){
    if (totalBill > 20) {
        return totalBill * 0.9; // 10% discount for bills above $20
    } else {
        return totalBill;
    }
}

// Scenario 3 - Checkout Process
function checkout() {
    const totalBill = parseFloat(prompt("Your total bill is $"));
    const discountedTotal = applyDiscount(totalBill);

    console.log(`Your discounted total is $${discountedTotal.toFixed(2)}`);

    // Nested loop for payment options
    while (true) {
        const paymentMethod = prompt("Choose a payment method (cash, card)").toLowerCase();

        if (paymentMethod === "cash") {
            console.log("Thank you for your purchase! Please pay with cash at the counter.");
            break;
        } else if (paymentMethod === "card") {
            console.log("Thank you for your purchase! Your card payment is being processed.");
            break;
        } else {
            console.log("Invalid payment method. Please choose again.");
        }
    }
}

// Simulate the shopping experience
buyGroceries();
checkout();
