
let stocks = {
    Fruits : ["Strawberry","Grapes","Banana","Apple"],
    liquid : ["Water","Ice"],
    holder : ["Cone","Cup","Stick"],
    toppings : ["Chocolate","Peanuts"]
};

let is_shop_open = true;  //false if u want to test reject
function time(ms) {
    return new Promise((res,rej)=>{
        if(is_shop_open){
            setTimeout(res,ms);
        }else{
            rej(console.log("Shop is closed"))
        }
    })
}

async function Kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`);
        console.log("Start the production");
        await time(3000);
        console.log("cut the fruits");
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        await time(1000)
        console.log("Start the machine");
        await time(2000)
        console.log(`iceCream placed on ${stocks.holder[0]}`);
        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`);
        await time(2000);
        console.log("Serve iceCream");

    } catch (error) {
        console.log("Customer left",error);
    }finally{
        console.log("Shop is closed");
    }
}

Kitchen();