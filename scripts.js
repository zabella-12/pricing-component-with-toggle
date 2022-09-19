let check = document.getElementById('price')
let planValuesAnually = document.querySelectorAll('.annual')
let planValuesMonth = document.querySelectorAll('.month')

for (let i = 0; i < planValuesAnually.length; i++) {
    planValuesMonth[i].style.display = "none"
    planValuesAnually[i].style.display = "inline-block"
}

check.addEventListener('change', function () {
    if (check.checked) {
        for (let i = 0; i < planValuesAnually.length; i++) {
            planValuesAnually[i].style.display = "none";
            planValuesMonth[i].style.display = "inline-block"
        }
    }
    else {
        for (let i = 0; i < planValuesMonth.length; i++) {
            planValuesMonth[i].style.display = "none"
            planValuesAnually[i].style.display = "inline-block"
        }
    }
})