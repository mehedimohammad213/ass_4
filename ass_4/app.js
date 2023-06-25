function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if(isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;

    calculateTotal()

}

function getInputValue(product){
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = phoneInput.value;
    return phoneNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    // suppose tax 10%
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    
    // update On Html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219,  false);
});



document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59,  true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59,  false);
});