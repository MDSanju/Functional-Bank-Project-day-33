function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;

    inputField.value = '';
    return inputAmountText;
}


function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalPrevious = totalElement.innerText;
    const newTotal = parseFloat(amount) + parseFloat(totalPrevious);
    totalElement.innerText = newTotal;
}


function getCurrentBalance() {
    const totalBalance = document.getElementById('balance-total');
    const previousBalance = totalBalance.innerText;
    return previousBalance;
}


function updateBalance(amount, isAdd) {
    const totalBalance = document.getElementById('balance-total');
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        totalBalance.innerText = parseFloat(amount) + parseFloat(previousBalance);
    } else {
        totalBalance.innerText = parseFloat(previousBalance) - parseFloat(amount);
    }
}



// deposit
document.getElementById('deposit-button').addEventListener('click', function() {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});



// withdraw
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInputAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawInputAmount > 0 && withdrawInputAmount < parseFloat(currentBalance)) {
        updateTotalField('withdraw-total', withdrawInputAmount);
        updateBalance(withdrawInputAmount, false);
    }
});

if (withdrawInputAmount > parseFloat(currentBalance)) {
    console.log('You do not have sufficient balance to get it!');
}