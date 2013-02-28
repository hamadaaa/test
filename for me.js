function person() {
    this.getName = function () {
        return name;
    };
    this.setName = function (newName) {
        name = newName;
    };
    this.getsurName = function () {
        return surName;
    };
    this.setName = function (newSurName) {
        name = newSurName;
    };
    this.getLocation = function () {
        return location;
    };
    this.setLocation = function (newLocation) {
        location = newLocation;
    };
    var name = "Ahmad";
    var surName = "Ismail";
    var location = "lviv";

};

var person2 = new person();
person2.getName();
person2.setLocation("Kiev");


function dateCompare(time1, time2) {
    var t1 = new Date();
    var parts = time1.split(":");
    t1.setHours(parts[0], parts[1], parts[2], 0);
    var t2 = new Date();
    parts = time2.split(":");
    t2.setHours(parts[0], parts[1], parts[2], 0);

    // returns 1 if greater, -1 if less and 0 if the same
    if (t1.getTime() > t2.getTime()) return (t2 - t1);
    if (t1.getTime() < t2.getTime()) return "you break is passed";
    return 0;
}

alert(dateCompare("12:40:13", "20:01:01"));


//3RD task

function person() {
    this.getName = function () {
        return name;
    };
    this.setName = function (newName) {
        name = newName;
    };
    this.getsurName = function () {
        return surName;
    };
    this.setsurName = function (newSurName) {
        surName = newSurName;
    };
    this.getLocation = function () {
        return location;
    };
    this.setLocation = function (newLocation) {
        location = newLocation;
    };
    this.addTask = function (newTask) {
        task = newTask;
    };
    this.getTasks = function () {
        return task;
    };
    var task = [];
    var name = "Ahmad";
    var surName = "Ismail";
    var location = "lviv";

};

function task() {

    this.settaskName = function (newTaskName) {
        taskName = newTaskName;
    };

    this.setstartTime = function (newstartTime) {
        startTime = newstartTime;
    };

    this.setprority = function (newprority) {
        prority = newprority;
    }
};

var task1 = new task({settaskName:"Jira", setstartTime:"week 09", setprority:"Critical"});
var person1 = new person({setName:"vova", setLocation:"Danish"});
person1.addTask(task1);

person1.getTasks;

