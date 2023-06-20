document.getElementById('calculate-btn').addEventListener('click', function() {
    var propertyIncome = document.getElementById('property-income').value;
    var salaryIncome = document.getElementById('salary-income').value;
    var otherIncome = document.getElementById('other-income').value;
    var propertyExpenses = document.getElementById('property-expenses').value;
    var insuranceDeduction = document.getElementById('insurance-deduction').value;
    var lifeInsuranceDeduction = document.getElementById('life-insurance-deduction').value;
    var earthquakeInsuranceDeduction = document.getElementById('earthquake-insurance-deduction').value;

    var totalIncome = Number(propertyIncome) + Number(salaryIncome) + Number(otherIncome) - Number(propertyExpenses) - Number(insuranceDeduction) - Number(lifeInsuranceDeduction) - Number(earthquakeInsuranceDeduction);
    var tax;

    if(totalIncome <= 1950000) {
        tax = totalIncome * 0.05;
    } else if (totalIncome <= 3300000) {
        tax = totalIncome * 0.1 - 97500;
    } else if (totalIncome <= 6950000) {
        tax = totalIncome * 0.2 - 427500;
    } else if (totalIncome <= 9000000) {
        tax = totalIncome * 0.23 - 636000;
    } else if (totalIncome <= 18000000) {
        tax = totalIncome * 0.33 - 1536000;
    } else if (totalIncome <= 40000000) {
        tax = totalIncome * 0.40 - 2796000;
    } else {
        tax = totalIncome * 0.45 - 4796000;
    }

    document.getElementById('result').innerHTML = "課税所得は " + Math.round(tax) + " 円です";
});
