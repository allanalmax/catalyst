//this is my first class laptop with 7 properties and two methods
function laptop(brand, storage, price, color, size, system, model) {
    this.brand = brand;
    this.storage = storage;
    this.price = price;
    this.color = color;
    this.size = size;
    this.system = system;
    this.model = model;
    this.speed = function (x) {
        return this.brand + ' ' + 'is' + ' ' + x;
    }
    this.processor = function (y) {
        return this.brand + ' ' + 'has a' + ' ' + y + ' ' + 'processor';
    }
}
let laptop1 = new laptop('Apple', '1TB', 5,000,000, 'grey', '16 inches', 'MacOS', 'macbook')
let laptop2 = new laptop('Microsoft', '256GB', 4,000,000, 'black', '13 inches', 'Windows', 'hp')
let laptop3 = new laptop('Google', '1TB', 3,500,000, 'white', '14 inches', 'Windows', 'chromebook')
console.log('First class')
console.log(laptop)
console.log(laptop1.speed('very fast'));
console.log(laptop1.processor('very high'));

//this is my second class school with 7 properties and two methods
function school(name, location, fees, curriculum, level, students, gender) {
    this.name = name;
    this.location = location;
    this.fees = fees;
    this.curriculum = curriculum;
    this.level = level;
    this.students = students;
    this.gender = gender;
    this.popular = function(popularity) {
        return this.name + ' ' + 'is the' + ' ' + popularity;
    }
    this.size = function(z) {
        return this.name + ' ' + 'is' + ' ' + z;
    }
}
let school1 = new school('KCB', 'Wakiso', 2,000,000, 'UNEB', 'secondary', 2000, 'male')
let school2 = new school('GGS', 'Gayaza', 1,500,000, 'UNEB', 'secondary', 1700, 'female')
let school3 = new school('SMASK', 'Entebbe', 1,700,000, 'UNEB', 'secondary', 6000, 'mixed')
console.log('Second class')
console.log(school)
console.log(school1.popular('most popular'))
console.log(school1.size('very big'))

//this is my third class country with 7 properties and two methods
function country(name, president, size, population, language, currency, poverty) {
    this.name = name;
    this.president = president;
    this.size = size;
    this.population = population;
    this.language = language;
    this.currency = currency;
    this.poverty = poverty;
    this.type = function(b) {
        return this.name + ' ' + 'is' + ' ' +               b;
    }
    this.weather = function(c) {
        return this.name + ' ' + 'is' + ' ' + c;
    }
}
let country1 = new country('Uganda', 'big', 36,000,000, 'shillings', 'high')
let country2 = new country('Kenya', 'bigger', 57,000,000, 'shillings', 'moderate')
let country3 = new country('South Africa', 'huge', 58,000,000, 'rand', 'less')
console.log('Third class')
console.log(country)
console.log(country1.type('landlocked'));
console.log(country1.weather('rainy'));

//this is my fourth class sport with 7 properties and two methods
const sport = function(name, players, duration, teams, gender, origin, injuries) {
    this.name = name;
    this.players = players;
    this.duration = duration;
    this.teams = teams;
    this.gender = gender;
    this.origin = origin;
    this.injuries = injuries;
    this.penalty = function(action) {
        return this.name + ' ' + 'has' + ' ' + action;
    }
    this.intensity = function(amount) {
        return this.name + ' ' + 'has' + ' ' + amount;
    }
}
let sport1 = new sport('basketball', 'five', 'two', 'unisex', 'USA', 'high')
let sport2 = new sport('football', 'eleven', 'two', 'unisex', 'Britain', 'moderate')
let sport3 = new sport('rugby', 'fifteen', 'two', 'unisex', 'England', 'very high')
console.log('Fourth class')
console.log(sport)
console.log(sport1.penalty('free throws'))
console.log(sport1.intensity('high intensity'))

//this is my fifth class perfurme with 7 properties and two methods
let perfume = function(name, price, scent, color, duration, type, origin) {
    this.name = name;
    this.price = price;
    this.scent = scent;
    this.color = color;
    this.duration = duration;
    this.type = type;
    this.origin = origin;
    this.packaging = function(package) {
        return this.name + ' ' + 'has' + ' ' + package;
    }
    this.size = function(c) {
        return this.name + ' ' + 'is' + ' ' + c;
    }
}
let perfume1 = new perfume('Dior', 500,000, 'strong', 'black', 'longlasting', 'Eau de cologne', 'French');
let perfume2 = new perfume('Chanel', 450,000, 'strong', 'maroon', 'longlasting', 'Eau de parfum', 'French');
let perfume3 = new perfume('Versace', 700,000, 'strong', 'gold', 'longlasting', 'Eau de parfum', 'Italy');
console.log('Fifth class')
console.log(perfume)
console.log(perfume1.packaging('neat packaging'));
console.log(perfume1.size('small'));

//this is my sixth class dog with 7 properties and two methods
function dog(name, age, size, body, type, shape, color) {
    this.name = name;
    this.age = age;
    this.size = size;
    this.body = body;
    this.type = type;
    this.shape = shape;
    this.color = color;
    this.temperament = function(temper) {
        return this.name + ' ' + 'has a' + ' ' + temper;
    }
    this.bark = function(sound) {
        return this.name + ' ' + 'barks' + ' ' + sound;
    }
}
let dog1 = new dog('German shephard', 5, 'big', 'hairy', 'domestic', 'wedged-shape', 'black-brown')
let dog2 = new dog('Chiwawa', 3, 'small', 'less-hairy', 'domestic', 'apple-head', 'brown')
let dog3 = new dog('Wolf', 7, 'big', 'hairy', 'wild', 'narrow-chest', 'black')
console.log('Sixth class');
console.log(dog)
console.log(dog3.temperament('high temper'));
console.log(dog3.bark('loudly'));

//this is my seventh class tree with 7 properties and two methods
function tree(name, height, thickness, canopy, breed, type, color) {
    this.name = name;
    this.height = height;
    this.thickness = thickness;
    this.canopy = canopy;
    this.breed = breed;
    this.type = type;
    this.color = color;
    this.leaf_shape = function(shape) {
        return this.name + ' ' + 'has a' + ' ' + shape;
    }
    this.leaf_color = function(shade) {
        return this.name + ' ' + 'is' + ' ' + shade;
    }
}
let tree1 = new tree('Eucalyptus', '180-feet', 'thin', 'scattered', 'shrubs', 'evergreen', 'colorful black')
let tree2 = new tree('Chiwawa', '200 feet', 'wide', 'thick', 'hardwood', 'tropical', 'brown')
let tree3 = new tree('Cedar', '120 feet', 'moderate', 'thick', 'coniferous', 'evergreem', 'bluish-green')
console.log('Seventh class');
console.log(tree);
console.log(tree3.leaf_shape('needle-like'));
console.log(tree3.leaf_color('green'));

