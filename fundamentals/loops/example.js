people = ['Jamil', 'Musa', 'Isa', 'Qasim']

// for (let i=0; i<people.length; i+=1){
//     console.log(people.at(i))
// }

// for (let i=people.length-1; i>=0; i-=1){
//     console.log(people.at(i))
// }

for (let i=0; i<=10; i+=1){
    if (i%2!=0 & i!=0){
        console.log(i)
    }
}

// Question 1:
// Loop through all numbers from 1-15 and print
// "Fizz" if the number is only divisible by 3
// print "Buzz" if the number is only divisible by 5
// print "FizBuzz" if the number is divisible by both 3 and 5
// and print the number otherwise.

// Question 2:
// Create a list containing people; each person should have a name
// an age and height. Loop through this list and for each person print
// A statement like this:
// "Hi my name is [name], I am [age] years old and I am [height] tall."

// Question 3:
// Write a code that checks from a list of items in a shop and 
// only shows us items that are less than or equal to our purchasing
// power. For example, if I can only afford 1000, I should only see
// items that are 1000 or less.

// Question 4
// Create a shopping list and  a list of item available in a shop.
// Your shopping list should have a budget for each item for example
// N10 for Cake. And the list of items available in a shop should also 
// have prices for example Cake 100.
// Now assume you are going to the shop to buy the items on your list,
// Once you buy an item, remove it from your list.
// Note that you can only buy items that are less or equal your budget
// At the end of the shopping, lets see the items you purchased, how much
// money you have left and the items not yet purchased.