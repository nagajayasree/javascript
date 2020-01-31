//creating an object

let home = {
    name : "happy home",
    locality : "sr nagar",
    color : "white",
    rooms : 4,
    calculateArea : function(length,width){
        let area = length * width;
        console.log(area);
    }
}

console.log(home);
console.log(home.name);
home.calculateArea(6,8);

//factory function

function createHome(name,locality,rooms){
    const home = {
        name,
        locality,
        rooms,
        area(length,width){
            console.log(length * width);
        }
    };
   return home;
}

let home1 = createHome("sweet home","rk puram",6);
console.log(home1);
home1.area(1,2);

//constructor function

function Home(name,locality,color){
    this.name = name;
    this.locality = locality;
    this.color = color;
    this.area = function(length,width){
        console.log(length * width);
    }
}

let h1 = new Home('abc','def','yellow');
console.log(h1);
h1.area(3,4);

//using class

class HomeTwo{
    constructor(name,locality,color){
        this.name = name;
        this.locality = locality;
        this.hasPool = false;
        this.hasOwner = true;
        this.furniture = false;
        this.color = color;
    }

    poolCheck(){
        if(this.hasPool){
            console.log("has pool");
        }
        else{
            this.hasPool = false;
            console.log("no pool");
        }
    }

    checkOwner(){
        if(this.hasOwner){
            console.log("owned");
        }
        else if(!this.hasOwner){
            console.log("no owner");
        }
    }

    getfurniture(){
       if(this.furniture){
           console.log("furnitured");
       }
       else{
           console.log("not furnitured");
       }
    }
}

let home2 = new HomeTwo("vj villa","rue montcalm","white");
console.log(home2);
home2.poolCheck();
home2.checkOwner();
home2.getfurniture();
