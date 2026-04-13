function checkPrime() {
    let num = document.getElementById("number").value;
    num = parseInt(num);

    let isPrime = true;

    if (num <= 1 || isNaN(num)) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    let resultText = "";

    if (isPrime) {
        resultText = num + " is a Prime Number";
    } else {
        resultText = num + " is NOT a Prime Number";
    }

    document.getElementById("result").innerHTML = resultText;
}