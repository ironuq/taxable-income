function calculateTaxableIncome() {
    var salary = document.getElementById('salary').value;
    var propertyIncome = document.getElementById('propertyIncome').value;
    var propertyExpenses = document.getElementById('propertyExpenses').value;
    var otherIncome = document.getElementById('otherIncome').value;
    var socialInsurance = document.getElementById('socialInsurance').value;
    var lifeInsurance = document.getElementById('lifeInsurance').value;
    var earthquakeInsurance = document.getElementById('earthquakeInsurance').value;

    var taxableIncome = (Number(salary) + Number(propertyIncome) + Number(otherIncome)) - 
                        (Number(propertyExpenses) + Number(socialInsurance) + Number(lifeInsurance) + Number(earthquakeInsurance));
    
    var tax;
    if (taxableIncome <= 1950000) {
        tax = taxableIncome * 0.05;
    } else if (taxableIncome <= 3300000) {
        tax = taxableIncome * 0.10 - 97500;
    } else if (taxableIncome <= 6950000) {
        tax = taxableIncome * 0.20 - 427500;
    } else if (taxableIncome <= 9000000) {
        tax = taxableIncome * 0.23 - 636000;
    } else if (taxableIncome <= 18000000) {
        tax = taxableIncome * 0.33 - 1536000;
    } else if (taxableIncome <= 40000000) {
        tax = taxableIncome * 0.40 - 2796000;
    } else {
        tax = taxableIncome * 0.45 - 4796000;
    }

    document.getElementById('result').innerHTML = '課税所得は ' + taxableIncome + ' 円で、税金は ' + tax + ' 円です。';
}
