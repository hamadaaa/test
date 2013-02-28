function Person() {
    // Public methods
    this.getName = function() {
        return name.first;
    };

    this.setName = function(newName) {
        name.first = newName;
    };

    this.getsurName = function() {
        return name.last;
    };

    this.setSurName = function(newSurName) {
        name.last = newSurName;
    };

    this.getLocation = function() {
        return location;
    };

    this.setLocation = function(newLocation) {
        location = newLocation;
    };

    // Private properties
    var name = {
        first: "Ahmad",
        last: "Ismail"
    };

    var location = "lviv";
}

var person2 = new Person();
person2.getName();
person2.setLocation("Kiev");


function calculateRemainLunchTime(lunchTime) {
    var lunchTime = new Date();
    lunchTime.setHours(23);
    lunchTime.setMinutes(0);
    lunchTime.setSeconds(0);

    var diff = lunchTime - new Date();

    var diffSec = diff / 1000;
    var diffMin = diffSec / 60;
    var diffHours = diffMin / 60;

    console.log(Math.floor(diffHours / 24) % 24, Math.floor(diffHours) % 24, Math.floor(diffMin) % 60, diffSec % 60);
}

//console.log(calculateRemainLunchTime("12:40:13", "20:01:01"));

//3RD task

function Person2() {
    this.addTask = function(newTask) {
        tasks.push(newTask);
    };

    this.getTasks = function() {
        return tasks;
    };

    var tasks = [];
}

function Task() {
    this.getName = function() {
        return name;
    };

    this.setName = function(newName) {
        name = newName;
    };

    this.getStartTime = function() {
        return startTime;
    };

    this.setStartTime = function(newStartTime) {
        startTime = newStartTime;
    };

    this.getPriority = function() {
        return priority;
    };

    this.setPriority = function(newPriority) {
        priority = newPriority;
    };

    var name = "";
    var startTime = null;
    var priority = 0;
}

///////////////////

var vova = new Person2();

var task1 = new Task();
task1.setName("Go to shop");

var task2 = new Task();
task2.setName("Start working, Vova!!!");

vova.addTask(task1);
vova.addTask(task2);

var taskList = vova.getTasks();

for (var i = 0; i < taskList.length; ++i) {
    console.log(taskList[i].getName());
}

/////////////////////

function Task2(params) {
    this.getName = function() {
        return name;
    };

    this.setName = function(newName) {
        name = newName;
    };

    this.getStartTime = function() {
        return startTime;
    };

    this.setStartTime = function(newStartTime) {
        startTime = newStartTime;
    };

    this.getPriority = function() {
        return priority;
    };

    this.setPriority = function(newPriority) {
        priority = newPriority;
    };

    var name = "123123123";
    var startTime = null;
    var priority = 0;

    if (params) {
        this.setName(params.name || "lalala");
        //name = params.name || "lalala";

        this.setPriority(params.priority || 0);
    }
}

//////

var task2_1 = new Task2({
    name: "Go to shop",
    priority: 3
});

var task2_2 = new Task2({});

var task2_3 = new Task2();


task2_3.getName()



//////////

var name = "Go to shop";

name.match(/shop/);