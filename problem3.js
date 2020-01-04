//Finding all the Prime Factors of any number .
function prime(x) {
    let flagPrime = true;
    for (let i = 2; i <= x / 2; i++) {
        if (x % i === 0) {
            flagPrime = false;
            break;
        }
    }
    return flagPrime;
}

function primeFactors(y) {
    let primeFactors = [];
    for (let j = 2; j <= y / 2; j++) {
        if (y % j == 0) {
            if (prime(j))
                primeFactors.push(j)
        }
    }
    return primeFactors;
}

let answer = primeFactors(13195);
for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
}


