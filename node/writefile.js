const fs =require("fs");

const cars = ["Benz", "Audi", "Range Rover"]

fs.appendFile("./newfile.txt", cars.join(","), function(err) {
    if(err) {
        console.log("Couldn't create file");
        console.log(err)
    } else {
        console.log("Created file successfully");
    }
});