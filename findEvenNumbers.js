//program to find number of even values up to given number

function findEvenValues(limit){
    for(n = 0;n <= limit;n++){
        if(n % 2 == 0){
            console.log(n);
        }
    }
};

findEvenValues(20);
