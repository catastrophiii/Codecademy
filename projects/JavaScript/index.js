const joinMilitary = (age) => {
    if (age >= 18) {
        return true
    }
    else if (age >= 17) {
        return 'Need parents signature.'
    }
    else {
        return false
    }
}
console.log(joinMilitary(17));
console.log(joinMilitary(18));
console.log(joinMilitary(16));
