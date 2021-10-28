const food = {
    name: 'posho',
    taste: 'sweet',
    price: 2000,
    color: 'white',
    food_value: 'carbs'
}
console.log(food.name);

var car = {
    name: 'G-class',
    model: 'Benz',
    color: 'black',
    sound: function () {
        console.log('when its new ' + car.name + ' vooms')
        return 'vooms'
    },
    price: function (a, b) {
        let add = a + b;
        return add;
    }
}
console.log(car.sound())
console.log(car.price(10, 10))
console.log(Object.keys(car))
console.log(Object.values(car))

const phone = {
    name: 'Samsung',
    price: 700000,
    colour: 'black',
    sound: function(){
        console.log("Donda");
    }
}
phone.model = 'Galaxy';
phone.storage = function(){
    console.log(256)
}
console.log(phone.model)
phone.storage();