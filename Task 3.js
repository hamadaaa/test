var allParts = [];
var allCars = [];
function Car(){
    this.model = 'xxx';
    var parts = [];
    var name = '';

    this.addPart = function(newPart) {
        parts.push(newPart);
    };

    this.getParts = function() {
        return parts;
    };

    this.getName = function() {
        return name;
    };

    this.setName = function(n) {
        name = n;
    };

    this.getStatus = function(part){
        var status = ["OK", "Error"];
        var k = 0;
        for (var j = 0; j < parts.length; j++) {
            if(part.getName() == parts[j].getName()){
                k++;
            }
        }
        if(k){
            return status[0];
        } else{
            return status[1];
        }

    }
}

function Part(){
    var name = "";
    this.setName = function(newName) {
        name = newName;
    };

    this.getName = function() {
        return name;
    };
}


var car1 = new Car();
var car2 = new Car();
car1.setName('BM');
car2.setName('XXX');
allCars.push(car1);
allCars.push(car2);

var part1 = new Part();
part1.setName('motor');
allParts.push(part1);
var part2 = new Part('door');
part2.setName('door');
allParts.push(part2);
var part3 = new Part('body');
part3.setName('body');
allParts.push(part3);
var part4 = new Part('window');
part4.setName('window');
allParts.push(part4);

car1.addPart(part1);
car1.addPart(part2);
car1.addPart(part3);

car2.addPart(part2);
car2.addPart(part3);

var x = Math.floor(Math.random() * allCars.length);
console.log(allCars[x], x, allParts)
allCars[x].getName();
allCars[x].getStatus(part1);


setTimeout(function(){
    console.log(car1.getStatus());
}, 5000);

setInterval(function(){
    car1.getStatus();
    console.log(car1.getStatus())
}, 1000);
