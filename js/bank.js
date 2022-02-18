function inputDepositeAmount(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    inputField.value = '';
    return value;
};

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInputText = fieldTag.innerText;
    const value = parseFloat(fieldValueInputText);
    return value;
}
function updateDepositevalue(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}
function balanceUpdate(amount, isAdding) {
    const balanceAmount = getInnerTextValue('balance-update');

    let NewBalanceTotal;
    if (isAdding == true) {
        NewBalanceTotal = balanceAmount + amount;
    }
    else {
        NewBalanceTotal = balanceAmount - amount;
    }

    document.getElementById('balance-update').innerText = NewBalanceTotal;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = inputDepositeAmount('deposit-input');

    if (amount > 0) {
        updateDepositevalue('deposit-total', amount);
        balanceUpdate(amount, true);
    }

})

// handle withdraw
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const amount = inputDepositeAmount('Withdraw-input');
    const balance = getInnerTextValue('balance-update');
    // console.log(amount)
    if (amount > 0 && amount <= balance) {
        updateDepositevalue('withdraw-total', amount);
        balanceUpdate(amount, false);
    }
})