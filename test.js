var info_1 = {
    name: "Ahmad",
    last_name: "Ismail",
    age:24,
    country:"Lebanon",
    working : {
        address : {country: "Ukraine",
            city: "lviv"},
        position:"QA"},
    hobby:["football","study","running"]
}

var info_2 = {
    name: "Max",
    last_name: "Bob",
    age:60,
    country:"USA",
    working : {
        address : {country: "Africa",
            city: "San-ban"},
        position:"killer"},
    hobby:["fishing","kissing"]
}

var info_3 = {
    name: "Rodney",
    last_name: "Mo",
    age:32,
    country:"Germany",
    working : {
        address : {country: "Ukraine",
            city: "kharkov"},
        position:"PM"},
    hobby:["reading","PlayStation","sleeping"]
}

var a=[info_1, info_2, info_3];

console.log(info_1.working.address.city);
console.log(info_1.working.position);
console.log(info_1.hobby[1]);
console.log(a[1].hobby[1]);


//5 , 6
var fruits=["Apple","fig","Apricots","Grape","clementine","Banana" ];

fruits.sort(function(a,b){return a-b}); //accending

fruits.sort(function(a,b){return b-a});


//8

var array=["a", "b", "c", "d"];
var deleted= array[2] ;
delete array[2];

//9

var book=["a", "b", "c", "d"]
var remove = body.splice(1,1);

console.log(remove, book)

//10

var task=["a", "b", "c"];
task.splice(0,0,"b");


