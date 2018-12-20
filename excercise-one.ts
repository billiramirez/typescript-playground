// Let's refactor this code to the typescript

// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };
 
// let myself = {
//     name: "Max",
//     bankAccount: bankAccount,
//     hobbies: ["Sports", "Cooking"]
// };
 
// myself.bankAccount.deposit(3000);
 
// console.log(myself);



let bankAccount: {money: number, deposit: (value: number )=> void } = {
    money: 2000,
    deposit: function(value: number) {
        this.money += value;
    }
}

type bankAccount = {money: number, deposit: (value: number )=> void };

let myself: {name: string, bankAccount: bankAccount, hobbies:[string, string]} ={
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
}

myself.bankAccount.deposit(3000);
 
console.log(myself);

