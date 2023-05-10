
let mine = 0;
let autoClick = 0
let clickUpgrades = [
    {
        name: 'gas',
        price: 4,
        quantity: 0,
        multiplier: 3,

    },
    {
        name: 'oil',
        price: 7,
        quantity: 0,
        multiplier: 7
    }
]
let automaticUpgrades = [
    {

        name: 'BUGATI',
        price: 50,
        quantity: 0,
        multiplier: 20,


    },
    {

        name: 'BUGATI DRIVER',
        price: 80,
        quantity: 0,
        multiplier: 30,


    }
]
function reset() {
    let foundgas = clickUpgrades[0]
    let foundoil = clickUpgrades[1];
    let foundCar = automaticUpgrades[0]
    let foundDriver = automaticUpgrades[1]
    mine = 0;
    foundgas.quantity = 0;
    foundgas.price = 4;
    foundoil.quantity = 0;
    foundoil.price = 7;
    foundCar.price = 50;
    foundCar.quantity = 0;
    foundDriver.quantity = 0;
    foundDriver.price = 80;



    drawmine()
    drawGas()
    //drawGasPrice()
    document.getElementById('gprice').innerText = foundgas.price;
    drawoil()
    //drawOilPrice()
    document.getElementById('oprice').innerText = foundoil.price;

    drawCar()
    drawdriver()


}








function adminClick() {

    mine++;

    drawmine()
    addGasToMine()
    addOilToMine()
    addCar()
    addDriver()



}

function drawmine() {
    document.getElementById('mine').innerText = mine;
}
// BUYING GAS
function buyGas() {

    // Look through the clickUpgrades array and find the gas object
    let foundgas = clickUpgrades[0];
    if (mine < foundgas.price) {
        window.alert('come on you need more mines to buy this')
        return
    }
    // increase
    foundgas.quantity++;
    mine -= 5;

    drawGasPrice();
    drawmine()
    //once something is bougth the price should go up for purchasing next time.
    drawGas()
    drawmine()
}
function drawGasPrice() {
    let foundgas = clickUpgrades[0];

    foundgas.price *= 2;
    //console.log('here you are', foundgas)
    document.getElementById('gprice').innerText = foundgas.price;

}


function drawGas() {
    let foundgas = clickUpgrades[0];

    document.getElementById('gas').innerText = foundgas.quantity;

}

function addGasToMine() {
    let foundgas = clickUpgrades[0];
    // Check - do we have any gas left?
    if (foundgas.quantity > 0) {
        //mine -= 30;
        mine = mine + (foundgas.multiplier * foundgas.quantity);

        // mine += ;

        //foundgas.quantity--;
        //console.log('it is working or not', mine)
    }

    drawmine()
}


// BUYING OIL
function buyOil() {


    // Look through the clickUpgrades array and find the gas object
    let foundoil = clickUpgrades[1];
    // mine = mine + (foundoil.multiplier * foundoil.quantity);
    if (mine < foundoil.price) {
        window.alert('come on you need more mines to buy this');
        return //stop

    }

    foundoil.quantity++
    mine -= 12;




    drawOilPrice()
    drawoil()
    drawmine()
}
function drawOilPrice() {
    let foundoil = clickUpgrades[1];

    foundoil.price *= 2;
    //console.log('here you are', foundgas)
    document.getElementById('oprice').innerText = foundoil.price;

}
function drawoil() {
    let foundoil = clickUpgrades[1]
    document.getElementById('oil').innerText = foundoil.quantity;
}
function addOilToMine() {
    let foundoil = clickUpgrades[1];
    if (foundoil.quantity > 0) {
        //mine -= 30;
        mine = mine + (foundoil.multiplier * foundoil.quantity)
    }
    drawmine()
}























// BUYING NEW CAR
//
function drawCar() {
    let foundCar = automaticUpgrades[0];

    document.getElementById('newCar').innerText = foundCar.quantity;

}
// click on the car to buy it and increase its quantity
function buyCar() {

    // HOW CAN I STOP EARLY?
    let foundCar = automaticUpgrades[0];
    if (mine < foundCar.price) {
        window.alert('come on you need more mines to buy this')
        return // STOP
    }



    foundCar.quantity++;
    mine -= 50;
    // TODO YOU STILL NEED TO DO SOMETHING TO THE MULTIPLIER...
    //foundCar.multiplier
    drawCar()
    drawmine()


}

// This function will add to our total mine number
function addCar() {
    let foundCar = automaticUpgrades[0];
    // console.log('here you are')

    mine = mine + (foundCar.multiplier * foundCar.quantity);

}
drawmine()


// This function will add to our total mine number
function addDriver() {
    let foundCar = automaticUpgrades[1];
    // console.log('here you are')
    if (foundCar.quantity > 0) {
        //mine -= 50;
        mine = mine + (foundCar.multiplier * foundCar.quantity);

    }
    drawmine()
}
function drawdriver() {
    let foundCar = automaticUpgrades[1]
    document.getElementById('dpro').innerText = foundCar.quantity;

}
// click on the car to buy it and increase its quantity
function buyDriver() {
    let foundCar = automaticUpgrades[1];
    if (mine < foundCar.price) {
        window.alert('come on you need more mines to buy this')
        return
    }
    foundCar.quantity++;
    mine -= 50;

    drawdriver()
    drawmine()

}

setInterval(addCar, 3000)
setInterval(addDriver, 4000)
