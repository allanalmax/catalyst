const president = {
    name: 'Kagame',
    country: 'Rwanda',
}

function animal(name, color, type, gender) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.type = type;
    this.cry = function(sound){
        return this.name + ' ' + sound + ' ' + ' and is ' + ' ' + this.color;
    }
}
let animal1 = new animal('elephant', 'grey', 'wild', 'male');
let animal2 = new animal('zebra', 'stripped', 'wild', 'male');
console.log(animal1.cry('it trumpets'));
console.log(animal2.cry('it brays'));

//create seven classes with a minimumm of seven properties 
// with atleast two methods 
// with atleast three instances deadline 2pm sharp!
//add comments in your work


//arrow functions
let woman = function (name, height, color, tribe, character, style) { //const woman = function (){}
    this.name = name;
    this.height = height;
    this.color = color;
    this.tribe = tribe;
    this.character = character;
    this.style = style;
    this.cry = (x) => {
        return this.name + ' ' +  'cries' +  ' ' + x;
    }
}

let woman1 = new woman('Grace', 'tall', 'light-skinned', 'Muganda', 'great')
console.log(woman1.cry('silently'))