let client_info = function(client_name, client_gender, client_prefer_gender, client_prefer_count){//0 = male, 1=female, 
    this.client_name = client_name;
    this.client_gender = client_gender;
    this.client_prefer_gender = client_prefer_gender;
    this.client_prefer_count = client_prefer_count;

}

let waiter = function(client_info, prefer_gender=-1, count=-1){
    this.client_name = client_info.client_name;
    this.gender = client_info.client_gender;
    this.prefer_gender = prefer_gender;
    this.count = count;
}


let waiting_pot = [];

let addWaitingPot = (waiter)=>{
    waiting_pot.push(waiter);
}
let showWaitingPot = () =>{
    console.log("waiting리스트");
    for(let i of waiting_pot){
        console.log(`${i.client_name}\t| 성별: ${i.gender}\t| 선호성별: ${i.prefer_gender}\t| 인원수: ${i.count}`);
    }
}
let deleteWaitingPot = () =>{

}



let c1 = new client_info('hongkwon',true, true, -1);
let c2 = new client_info('ann', true, false, 3);
let w1 = new waiter(c1);
let w2 = new waiter(c2);
addWaitingPot(w1);
console.log(JSON.stringify(w1));
addWaitingPot(w2);
// console.log(waiting_pot);
let fs = require('fs');
let js = JSON.parse(fs.readFileSync('../data/test2.json', 'utf-8'));
console.log(js);
console.log(showWaitingPot());