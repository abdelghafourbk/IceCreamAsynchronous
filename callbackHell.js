
let stocks = {
    Fruits : ["Strawberry","Grapes","Banana","Apple"],
    liquid : ["Water","Ice"],
    holder : ["Cone","Cup","Stick"],
    toppings : ["Chocolate","Peanuts"]
};


    /*===First Step: Place Order===*/
let order = (Fruit_choice,call_production)=>{
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_choice]} was selected`);
        call_production();
    }, 2000);
    
};

//this is an example of callback hell

let production = ()=>{
    setTimeout(() => {
        console.log("Production has started");

            setTimeout(() => {
                console.log("the fruit has been chopped");    /*===Cut the Fruit===*/
                
                setTimeout(() => {
                    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);    /*===add liquids===*/

                    setTimeout(() => {
                        console.log("the machine started now");                              /*===Start the machine===*/

                        setTimeout(() => {
                            console.log(` ice cream was placed on ${stocks.holder[0]}`);     /*===Place on holder===*/

                            setTimeout(() => {
                                console.log(`${stocks.toppings[0]}  was added to ice cream`); /*===add toppings===*/

                                setTimeout(() => {
                                    console.log("Serve Ice Cream"); /*===Serve now===*/
                                }, 2000);

                            },3000 );

                        }, 2000);

                    }, 1000);

                }, 1000);

            }, 2000);

    }, 0000);
};



order(2,production);



