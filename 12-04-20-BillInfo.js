function Bill(processor,customer,order,dis){
    return{
        processor,
        customer,
        order,
        dis,
        calcDiscount(){
            let discount = (order*dis) / 100;
            let netPayable = order - discount;
            console.log(`The customer is from ${customer},product type is ${processor},
            amount of order is ${order},discount is ${dis}%,
            discount amount is ${discount} 
            and net payable is ${netPayable}`)
        }
    };
}

let bill1 = new Bill('32bit','industry',25000,5);
let bill2 = new Bill('32bit','industry',75000,7.5);
let bill3 = new Bill('32bit','industry',224000,10);
let bill4 = new Bill('16bit','industry',30000,5);
let bill5 = new Bill('8bit','industry',24000,10);

let bill6 = new Bill('32bit','govt',47000,6.5);
let bill7 = new Bill('32bit','govt',67000,8.5);
let bill8 = new Bill('32bit','govt',347000,10);
let bill9 = new Bill('16bit','govt',15000,6);
let bill10 = new Bill('8bit','govt',16000,10);

let bill11 = new Bill('32bit','university',24000,7.5);
let bill12 = new Bill('32bit','university',24000,8.5);
let bill13 = new Bill('32bit','university',241000,7.5);
let bill14 = new Bill('16bit','university',24000,5);
let bill15 = new Bill('8bit','university',54000,10);


bill1.calcDiscount();
bill7.calcDiscount();
bill10.calcDiscount();
bill14.calcDiscount();
bill15.calcDiscount();
