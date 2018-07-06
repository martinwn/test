// function Name(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// console.log(new Name('john', 'martin'));
// var name1 = new Name("John", "Martin");
// var name2 = new Name("Joe", "Martin");

// var origin;

// var paragraphs = document.getElementsByTagName("p");

// console.log(paragraphs.length);

// console.log(paragraphs);

// var a = 5;
// var b = 6;

// console.log("the meanng o flife is " + a + b);

// if (isNaN()) {
//     console.log("HI");
// }

// var myObject = {};
// myObject.drive = 50;
// console.log(myObject);
// myObject.drive
// "dljfkjdf".toLocaleLowerCase

// var newObject = new String();
// console.log(newObject.length);
// var newString = "";
// console.log(newString.length);

// var Animal = function (name, color, speed, location) {

//     this.name = name,
//     this.color = color,
//     this.speed = speed,
//     this.location = location
//     this.run = function(){
//         console.log("now running");
//     }
    
// };


// var animal1 = new Animal("Polar Bear", "White", 30, "North Pole");
// console.log(animal1 + " " + animal1.color);
// console.log(Date());

// var animals = ['tiger', 'bear', 'eagle'];
// var animals2 = ['tiger', 'bear', 'eagle'];

// if (animals.length == animals2.length) {
//     console.log("animals are equal");
// } else {
//     console.log("animals are not equal");
// }

// var  random = new String("dlkjflkdj");
// console.log(random);

// var randomnumber = new Number(50);
// var randomBoolean = new Boolean(true);k

// random.toLowerCase();

var fs = require("fs");

fs.writeFile("best_things_ever.txt", "lazy boy recliner, massage, meditation, hot shower, cheese fondue, hot coffee with cashew milk, kitten falling asleep on my lap", function (err) {
    if (err) {
        console.log(err.message);
    };
});

fs.readFile("best_things_ever.txt", "utf8", function(err, data) {
    if (err) {
        console.log(err.message);
        return;
    };

    var array = data.split(",")

    for (i=0; i < array.length; i++) {

        console.log(array[i]);

    };

})
