import chalk from 'chalk';
//Question 1
//installation complete
console.log(chalk.red("END QUESTION 01"));
//QUESTION2
let friend = "Areez";
//console.log("hello", friend,", would you like to learn some Python today?" );
console.log(`hello ${friend} would you like to learn some Python today?`);
console.log(chalk.red("END QUESTION 02"));
//Question 3 
//Storing a person name in variable 
let personName = "Sofiyan Hussain";
//printing the personName in LC
console.log("lowercase, ", personName.toLowerCase());
//printing the personName in UC
console.log("Uppercase, ", personName.toUpperCase());
//printing the personName in Titlecase
let word = personName.split(" ");
let TitleCaseName = " ";
for (let i = 0; i < word.length; i++) {
    TitleCaseName += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
console.log("Titlecase,", TitleCaseName);
console.log(chalk.red("END QUESTION 03"));
//Question 4
// Storing a famous quote and its athor
//storing quote
let quote = "A person who never made a mistake never tried anything new.";
// storing auther
let auther = "Einstein";
console.log(`"${quote}" - "${auther}"`);
console.log(chalk.red("END QUESTION 04"));
//Question 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Albert Einstein";
let Quote = "A person who never made a mistake never tried anything new.";
let message = `${famous_person} once said "${Quote}"`;
console.log(message);
console.log(chalk.red("END QUESTION 05"));
//Question 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let namewitwhitespace = "\t \n Sofiyan hussain \t \n";
console.log(`name wit white space - ${namewitwhitespace}`);
let strippedname = namewitwhitespace.trim();
console.log(`stripped name: ${strippedname}`);
console.log(chalk.red("END QUESTION 06"));
//Question 7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
let additionResult = 4 + 4;
console.log(`Additon Result: ${additionResult}`);
let subtractionResult = 12 - 4;
console.log(`Subtraction Result: ${subtractionResult}`);
let multiplicationResult = 4 * 2;
console.log(`Multiplication Result: ${multiplicationResult}`);
let divisionResult = 16 / 2;
console.log(`Division Result: ${divisionResult}`);
console.log(chalk.red("END QUESTION 07"));
//Question 8
//You should create four lines that look like this:
console.log(5 + 3);
console.log(12 - 4);
console.log(16 / 2);
console.log(4 * 2);
console.log(chalk.red("END QUESTION 08"));
//Question 9
//Favorite Number: Store your favorite number in a variable. 
//Then, using that variable, create a message that reveals your favorite number. Print that message
let favoriteNumber = 8;
let messageme = `My Favorite Number is ${favoriteNumber}`;
console.log(messageme);
console.log(chalk.red("END QUESTION 09"));
//Question 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.+
// If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. 
//then write one sentence describing what the program does.
//Just Addition example
// declare of two variables number
let number1 = 2;
let number2 = 3;
// add them
let sum = number1 + number2;
//for print
console.log(sum);
console.log(chalk.red("END QUESTION 10"));
//Question 11
//Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.
const names = ["Atta", "Arham", "Ahad", "Areez", "Ali", "Saim", "Asad", "Ahmed"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log(chalk.red("END QUESTION 11"));
//Question 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}, how are you?`);
}
console.log(chalk.red("END QUESTION 12"));
//Question 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const transportation = ["car", "motorcycle", "Bicycle", "bus",];
for (let i = 0; i < transportation.length; i++) {
    console.log(`“I would like to own a ${transportation[i]}"`);
}
console.log(chalk.red("END QUESTION 13"));
//Question 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
let Guestlist = ["Asad", "Ahmed", "Kamran"];
//invite each guest
Guestlist.forEach(guest => {
    console.log(`Dear ${guest} you are invited to dinner!`);
});
console.log(chalk.red("END QUESTION 14"));
//question15
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//remove guest who cannot come to dinner 
let unableguest = Guestlist.splice(2, 1)[0];
console.log(`${unableguest} can't join the dinner`);
//push
Guestlist.push("Fasseh");
console.log(Guestlist);
Guestlist.forEach(newguest => {
    console.log(`Dear ${newguest} you are invited to dinner!`);
});
console.log(chalk.red("END QUESTION 15"));
//Question 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Great news we have find the bigger dinner table");
//unshift  
Guestlist.unshift("Sofiyan");
//console.log(Guestlist);
//add namme on middle of guest list
Guestlist.splice(Math.floor(Guestlist.length / 2), 0, "Rameez");
//console.log(Guestlist);
//add name on last
Guestlist.push("Atta");
//console.log(Guestlist);
Guestlist.forEach(finalguestlist => {
    console.log(`Dear ${finalguestlist} you are invited to dinner!`);
});
//console.log(Guestlist);
console.log(chalk.red("END QUESTION 16"));
//Question 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
console.log("Unfornately my new dinner table won’t arrive in time for the dinner");
console.log("I can invite only two guests");
//remove guest from list
while (Guestlist.length > 2) {
    let removeguest = Guestlist.pop();
    if (removeguest !== undefined) {
        console.log(`Dear ${removeguest} I cant invite you to dinner!`);
    }
}
Guestlist.forEach(Guestlistfinal => {
    console.log(`Dear ${Guestlistfinal} you are Still invited to dinner!`);
});
console.log("Updated Guest list:", Guestlist);
//Guestlist.splice(0, Guestlist.length);
// console.log("Updated Guest list:", Guestlist);
console.log(chalk.red("END QUESTION 17"));
//question19
let invitation = Guestlist;
let invitationCount = invitation.length;
console.log(`You have ${invitationCount} guests to invite`);
console.log(chalk.red("END QUESTION 19"));
//question 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
let Placetovisit = ["Kyoto", "Santorini", "MachuPicchu", " Reykjavik", " CapeTown"];
//Print your array in its original order.
console.log("Original order:", Placetovisit);
//Print your array in alphabetical order without modifying the actual list.
console.log("Aplhabetic order:", [...Placetovisit].sort());
//Show that your array is still in its original order by printing it.
console.log("Original order after sorting", Placetovisit);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetic order:", [...Placetovisit].sort().reverse());
// Show that your array is still in its original order by printing it again
console.log("Original order after reversing", Placetovisit);
// Reverse the order of your list. Print the array to show that its order has changed.
Placetovisit.reverse();
console.log("Reverse alphabetic order:", Placetovisit);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
Placetovisit.reverse();
console.log("Reverse alphabetic order:", Placetovisit);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort in Aplhabetic order:", [...Placetovisit].sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort in Aplhabetic order:", [...Placetovisit].sort().reverse());
console.log(chalk.red("END QUESTION 18"));
//Question 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items.
let country = ["Pakistan", "India", "Afghanistan", "Albania", "Australia",];
console.log("list of country names:");
console.log(country);
let student = {
    name: "GIAIC",
    Studid: "1234567890",
    age: "20",
};
console.log(student);
console.log(chalk.red("END QUESTION 20"));
//Question 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let person = { name: 'Sofiyan', fname: "Muzaffar", age: 23 };
console.log(person);
console.log(chalk.red("END QUESTION 21"));
//Qusstion 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
const weekdays = ["Sun", "Mon", "Tue", "Wed", "thus", "fri", "sat",];
//console.log(weekdays(7)); error
console.log(weekdays[6]);
console.log(chalk.red("END QUESTION 22"));
//QUESTION 23
//Conditional Tests: Write a series of conditional tests. //
//Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let mycar = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(mycar == 'subaru');
console.log("Is car != 'subaru'? I predict True.");
console.log(mycar != 'subaru');
console.log("Is car != 'honda city'? I predict True.");
console.log(mycar != 'honda city');
console.log("Is car == 'honda city'? I predict True.");
console.log(mycar == 'honda city');
console.log("Is car != 'toyota'? I predict True.");
console.log(mycar != 'toyota');
console.log("Is car == 'toyota'? I predict false.");
console.log(mycar == 'toyota');
console.log("Is car.length == 6? I predict True");
console.log(mycar.length == 6);
console.log("Is car.length == 4? I predict True");
console.log(mycar.length == 4);
console.log("is 10>5 ? I predict True");
console.log(10 > 5);
console.log("is 10>5 ? I predict Ture");
console.log(10 < 5);
console.log(chalk.red("END QUESTION 23"));
//Question 24
// Tests for equality and inequality with strings
let food = 'pizza';
console.log("Is food == 'pizza'? I predict True.");
console.log(food == 'pizza');
console.log("Is food != 'burger'? I predict True.");
console.log(food != 'burger');
// Tests using the lower case function
let color = 'Red';
console.log("Is color.toLowerCase() == 'red'? I predict True.");
console.log(color.toLowerCase() == 'red');
console.log("Is color.toLowerCase() == 'blue'? I predict False.");
console.log(color.toLowerCase() == 'blue');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 15;
console.log("Is num == 15? I predict True.");
console.log(num == 15);
console.log("Is num != 15? I predict False.");
console.log(num != 15);
console.log("Is num > 10? I predict True.");
console.log(num > 10);
console.log("Is num < 10? I predict False.");
console.log(num < 10);
console.log("Is num >= 15? I predict True.");
console.log(num >= 15);
console.log("Is num <= 15? I predict True.");
console.log(num <= 15);
// Tests using "and" and "or" operators
// "and" operator tests
let temperature = 75;
let humidity = 60;
console.log("Is temperature > 70 and humidity < 80? I predict True.");
console.log(temperature > 70 && humidity < 80);
console.log("Is temperature > 80 and humidity < 80? I predict False.");
console.log(temperature > 80 && humidity < 80);
// "or" operator tests
let windSpeed = 15;
let isSnowing = false;
console.log("Is windSpeed > 10 or isSnowing == true? I predict True.");
console.log(windSpeed > 10 || isSnowing == false);
console.log("Is windSpeed > 20 or isSnowing == true? I predict False.");
console.log(windSpeed > 20 || isSnowing == false);
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'cherry'];
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana'));
console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape'));
// Test whether an item is not in an array
console.log("Is 'mango' not in fruits? I predict True.");
console.log(!fruits.includes('mango'));
console.log("Is 'apple' not in fruits? I predict False.");
console.log(!fruits.includes('apple'));
console.log(chalk.red("END QUESTION 24"));
//Question 25
//Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = "green"; // Assign the value 'green' to the alien_color variable.
if (alien_color == "green") {
    console.log("You earn 5 point");
}
let alien_color1 = "red";
if (alien_color1 == "green") {
    console.log("You earned 5 point");
}
console.log(chalk.red("END QUESTION 25"));
//Question 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
let alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned  10 points.");
}
let alien_color3 = "red";
if (alien_color3 == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
console.log(chalk.red("END QUESTION 26"));
//Question 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points/.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
let Alien_color = "red";
if (Alien_color == "green") {
    console.log("the player earned 5 points");
}
else if (Alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else if (Alien_color == "red") {
    console.log("the player earned 15 points.");
}
console.log(chalk.red("END QUESTION 27"));
//Question 28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
let age = 23;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age < 4) {
    console.log("The person is a toddler");
}
else if (age < 13) {
    console.log("The person is a kid");
}
else if (age < 20) {
    console.log("The person is a teenager");
}
else if (age < 65) {
    console.log("The person is a adult");
}
else {
    console.log("The person is elder");
}
console.log(chalk.red("End Question 28"));
//Question 29
//Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits
// Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Mango", "banana", "orange"];
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like banana!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like orange!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apple!");
}
if (favorite_fruits.includes("Watermelon")) {
    console.log("you really like Watermelon!");
}
console.log(chalk.red("End Question 29"));
//Question 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
const usernames = ["Sofiyan", "Usman", "Ahmed", "Moiz", "admin"];
for (const username of usernames) {
    if (username === 'admin') {
        console.log(chalk.bold.green(`Hello ${username}! Would you like to see a status report?`));
    }
    else {
        console.log(chalk.bold.blue(`Hello ${username}, thank you for logging in again.`));
    }
}
console.log(chalk.red(`End Question 30`));
//Question 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
const Users = [];
if (Users.length === 0) {
    console.log(chalk.bold.green(`We need to find some user!`));
}
else {
    for (const user of Users) {
        if (user === 'admin') {
            console.log(chalk.bold.green(`Hello ${user}! Would you like to see a status report?`));
        }
        else {
            console.log(chalk.bold.blue(`Hello ${user}, thank you for logging in again.`));
        }
    }
}
console.log(chalk.red(`End Question 31`));
//Question 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.  
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let currentUsers = ["sofiyan", "Usman", "Ahmed", "Moiz", "admin"];
let newUsers = [" sofiyan", "Amna", "Maryam", "Asad", "admin"];
let current_users_Lower = currentUsers.map(user => user.toLowerCase());
for (let new_user of newUsers) {
    if (current_users_Lower.includes(new_user.toLowerCase())) {
        console.log(`User name ${new_user} is not avaialble `);
    }
    else {
        console.log(`User name ${new_user} is avaialble `);
    }
}
console.log(chalk.red(`End Question 32`));
//Question 33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
//Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
console.log(chalk.red("END QUESTION 33"));
//Question 34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
//and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
//such as I really love pizza!
let pizzas = ["Pepperoni", "Margherita", "Hawaiian"];
for (let pizza of pizzas) {
    console.log(pizza);
}
'';
console.log("\n");
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("\nI really like pizza");
console.log(chalk.red("END QUESTION 34"));
//Question 35
//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Dog", "Cat", "Lion"];
for (let i = 0; i < animals.length; i++) {
    console.log(`${animals[i]}`);
}
console.log("\n");
for (let animal of animals) {
    console.log(`${animal} would make a great pet.`);
}
console.log("\nAny of these animals would make a great pet! but i love cats");
console.log(chalk.red("END QUESTION 35"));
//Question 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log(`you order ${size} shirt with the message that say ${text} `);
}
make_shirt("large", `"You love typescript"`);
console.log(chalk.red("END QUESTION 36"));
//Question 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function Make_shirt(size = "large", text = "I love TypeScript") {
    console.log(`you order ${size} shirt with the message that say ${text} `);
}
Make_shirt();
Make_shirt("Medium");
Make_shirt("Small", "BadBOY");
console.log(chalk.red("END QUESTION 37"));
//Question 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
//Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Tokyo", "Japan");
describe_city("Kabul", "Afghanistan");
console.log(chalk.red("END QUESTION 38"));
//Question 39
//City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Kabul", "Afghanistan"));
console.log(chalk.red("END QUESTION 39"));
function makeAlbum(artistName, albumTitle, numTracks) {
    let album = {
        artist: artistName,
        title: albumTitle
    };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}
// Creating three objects representing different albums
let album1 = makeAlbum('Nirvana', 'Nevermind');
let album2 = makeAlbum('The Beatles', 'Abbey Road');
let album3 = makeAlbum('Pink Floyd', 'The Dark Side of the Moon', 10);
// Printing each album object to show that the objects are storing the information correctly
console.log(album1);
console.log(album2);
console.log(album3);
console.log(chalk.red("END QUESTION 40"));
//Question 41
//Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Hermione Granger", "Ron Weasley", "Harry Potter"];
function show_magicians(Magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// function show_magicians(magicians: string[]) {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }
show_magicians(magicians);
console.log(chalk.red("END QUESTION 41"));
//Question 42
//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`${magicians[i]} THE GREAT`);
    }
}
make_great(magicians);
console.log(chalk.red("END QUESTION 42"));
//Question 43
//Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged,
// return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
/*
let magicians = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
    "David Blaine",
    "Derren Brown"
];
function make_great(magicians:string[]) {
    let great_magicians = magicians.map((magicians) => {
        return "The Great " + magicians;
    });
    return great_magicians;
}
let greatMagicians = make_great([...magicians]);
function show_magicians(magicians:string[]) {
    console.log(magicians);
}
show_magicians(magicians);
show_magicians(greatMagicians);
*/
console.log(chalk.red("END QUESTION 43"));
//Question 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time. 
function sandwich(...items) {
    console.log("Sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("enjoy your sanwitch sofiyan");
sandwich(`capsicum`, `tomota`, `chicken`);
sandwich(`beef`, `tomota`, `cheese`);
sandwich(`garlic chicken`, `tomota`, `cheese`);
console.log(chalk.red("END QUESTION 44"));
function createcar(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const us_car = createcar("toyota", "Carolla", { color: "black", year: 2000 });
console.log(us_car);
console.log(chalk.red("END QUESTION 45"));
