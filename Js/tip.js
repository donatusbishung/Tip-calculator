let addBtn = document.getElementById('addBtn');
let subBtn = document.getElementById('subBtn');
let numberOfPeopleDiv = document.getElementById('numberOfPeople');
let billInput = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tipInput');
let perPersonTotal = document.getElementById('totalAmount');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);
// Event listener for add button
addBtn.addEventListener('click', increasePeople); 

// Event listener for subtract button
subBtn.addEventListener('click', decreasePeople);


function increasePeople(e){
    numberOfPeople++;
    numberOfPeopleDiv.innerText = numberOfPeople;

    // Re-calculate the new tip based on the new number of people
    calculateBill()
}

function decreasePeople(e){
    if(numberOfPeople <= 1){
        return 1;
    }
    numberOfPeople--;
    numberOfPeopleDiv.innerText = numberOfPeople;


    // Re-calculate the new tip based on the new number of people
    calculateBill()
}

// billInput.addEventListener('keyup', calculateBill);
// tipInput.addEventListener('keyup', calculateBill)


function calculateBill(){
    // get the bill amount
    const bill = Number(billInput.value);

    // get the tip amount and convert to percentage
    const tipPercent = Number(tipInput.value) / 100;

    // get the total tip amount
    const tipAmount = bill * tipPercent;

    // get the total amount (bill + tip amount)

    totalAmount = tipAmount + bill;

    // calculate the per person total (total divided by number of people)
    const personTotal = totalAmount / numberOfPeople

    // update the per person total on the DOM
    perPersonTotal.innerText = `${personTotal.toFixed(2)}`;
}