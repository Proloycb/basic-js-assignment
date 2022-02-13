// Problem-1
function anaToVori (ana){
    if(typeof ana != 'number') {
        return 'please give a number';
    }
    var vori = ana / 16 ;
    return vori;
}


// Problem-2
function pandaCost (singaraQuantity, somosaQuantity, jilapiQuantity){
    if(singaraQuantity<0) {
        return 'please give a positive number';
    }
    if(somosaQuantity<0) {
        return 'please give a positive number';
    }
    if(jilapiQuantity<0) {
        return 'please give a positive number';
    }
    const perSingaraPrice = 7;
    const perSomosaPrice = 10;
    const perJilapiPrice = 15;

    const singaraPrice = singaraQuantity * perSingaraPrice ;
    const somosaPrice = somosaQuantity * perSomosaPrice ;
    const jilapiPrice = jilapiQuantity * perJilapiPrice ;

    const totalPrice = singaraPrice + somosaPrice + jilapiPrice ;
    return totalPrice;

}


// Problem-3

function picnicBudget (person) {
    if(typeof person != 'number') {
        return 'please give a number';
    }
    else if(person <= 100){
        const  totalBudget = person * 5000;
        return totalBudget;
    }
    else if (person <= 200){
        const first100PersonBudget = 100 * 5000;
        const restPerson = person - 100;
        const second100PersonBudget = restPerson * 4000;
        const totalBudget = first100PersonBudget + second100PersonBudget;
        return totalBudget;
    }
    else {
        const first100PersonBudget = 100 * 5000;
        const second100PersonBudget = 100 * 4000;
        const restPerson = person - 200;
        const restPersonBudget = restPerson * 3000;
        const totalBudget = first100PersonBudget + second100PersonBudget + restPersonBudget;
        return totalBudget;
    }
}


// Problem-4
function oddFriend(array){
    for(let i = 0; i <= array.length; i++){
        var element = array[i];
        if(typeof element != 'string') {
            return 'please give a string';
        }
        if(element.length % 2 != 0) {
            return element;
        }
    }
}