// const signup = ()=>{
//     console.log('This function is called');
// }

// signup();

// const signup = (name, email, phone)=>{
//     console.log('Your name is '+name+' your email is '+email+' and your phone number is '+phone);
// }

// signup('Ahmad', 'ahmad@gmail.com', '+2348098981245');

// const signup = (name='Ibrahim', email='ib@gmail.com', phone='+2348076123456')=>{
//     console.log('Your name is '+name+' your email is '+email+' and your phone number is '+phone);
// }

// signup(undefined, undefined, "+234909999999");

const isEven = (number)=>{
    if (number%2 === 0){
        return true
    }else{
        return false
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i=0; i<numbers.length; i+=1){
    console.log(numbers[i], isEven(numbers[i]))
}

let numbers2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i=0; i<numbers2.length; i+=1){
    console.log(numbers2[i], isEven(numbers2[i]))
}

// Q1: Write a function that returns the product of two numbers when called.

const product = (num1, num2) =>{
    return num1*num2
}

console.log(product(10, 2)+5)

// Q2: Write a function that takes 'budget' and 'items'; where budget is a number
// and items a list of objects containing names and prices of some items. Make it
// such that your function returns a new list containing only the items that are
// less than or equal the budget.