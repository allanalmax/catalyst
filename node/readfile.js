const fs =require("fs");

fs.readFile("newfile.txt", "utf-8", function(err, content) {
    if(err) {
        console.log("Couldn't read file");
        console.log(err)
    } else {
        console.log("Read file successfully");
        console.log(content)
    }
});