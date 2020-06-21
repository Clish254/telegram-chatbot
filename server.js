process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const  express = require('express');

const app = express();
//setup server port;
const port = process.env.PORT || 3000;

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    
    const Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
      bot.sendMessage(msg.chat.id,`Hi ${msg.from.first_name} type /keywords to see keywords that I understand`);
      }

    const bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    } 
    const Hello = "hello";
    if (msg.text.toString().toLowerCase().indexOf(Hello) === 0) {
    bot.sendMessage(msg.from.id, "Hello  " + msg.from.first_name);
    }
    //send primitive data types
    const dataType = "data type";
    if (msg.text.toString().toLowerCase().includes(dataType)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/PmB1J4s",{caption : "Here you go ! \nThese are the primitive datatypes in javascript.\nFor more information visit https://www.theavocoder.com/complete-javascript/2018/12/18/primitive-data-types"} );
        }
    
    //send variables
    const variables = "variable" ;
    if (msg.text.toString().toLowerCase().includes(variables)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/XpZfT7E",{caption : "Here you go ! \nThis is how you declare variables in javascript.\n Variables declared using the const keyword are immutable.\nFor a more detailed explanation visit https://www.theavocoder.com/complete-javascript/2018/12/17/variables"});
        }
    //send operators
    const operators = "operator" ;
    if (msg.text.toString().toLowerCase().includes(operators)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/eKk8mmC",{caption : "Here you go ! \nJavaScript operators are used to assign values, compare values, perform arithmetic operations, and so on.\nThis example shows assignment operators in javascript.\nLearn more about operators in javascript here https://www.theavocoder.com/complete-javascript/2018/12/18/operators"});
        }
    //send conditionals
    const conditionals = "condition" ;
    if (msg.text.toString().toLowerCase().includes(conditionals)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/OSLr2Dg",{caption : "Here you go ! \nThe syntax of an if-else statements consists of at least two parts: if the condition between the parentheses returns true, the code after the “if” statement will be executed.\nHowever, if it returned false, the code in the “else” statement will be executed.\nLearn more about conditionals here https://www.theavocoder.com/complete-javascript/2018/12/18/conditionals"});
        }
    //if user types if-else
    //send conditionals
    const ifElse = "if-else" ;
    if (msg.text.toString().toLowerCase().includes(ifElse)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/OSLr2Dg",{caption : "Here you go ! \nThe syntax of an if-else statements consists of at least two parts: if the condition between the parentheses returns true, the code after the “if” statement will be executed.\nHowever, if it returned false, the code in the “else” statement will be executed.\nLearn more about conditionals here https://www.theavocoder.com/complete-javascript/2018/12/18/conditionals"});
        }
    //send array
    const ourArray = "array";
    if (msg.text.toString().toLowerCase().includes(ourArray)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/v3MZLoF",{caption : "Here you go ! \nYou can store a sequence of any type of data in an array. This is how arrays look like in javascript.\nLearn more about arrays here https://www.theavocoder.com/complete-javascript/2018/12/19/array-methods-and-properties"});
        }  
    //objects
    const objects = "object";
    if (msg.text.toString().toLowerCase().includes(objects)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/SP8X6Pi",{caption : "Here you go ! \nAn object is a collection of related data. We use brackets and key/value pairs in order to store this data.\nIn this example:Let’s say that we want to have an array of people that signed up to our website. We want to get information about the name, age, and nationality of that person. We would define all this data in an object, where every object represents a different user.\nLearn more about objects here https://www.theavocoder.com/complete-javascript/2018/12/19/objects"});
        } 
    //functions
    const functions = "function"
    if (msg.text.toString().toLowerCase().includes(functions)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/zDjdxJB",{caption : "Here you go ! \nOne way to define a function is to type the keyword “function”, followed by the name of that function. In between the curly brackets, we can specify what we want that function to do or what value to return. \nWe can pass arguments (or parameters) to functions by adding values between the brackets.\nThere is more information about functions in javascript here https://www.theavocoder.com/complete-javascript/2018/12/20/functions"});
        }
    //callback
    const callbacks = "callback"
    if (msg.text.toString().toLowerCase().includes(callbacks)) {
    bot.sendPhoto(msg.chat.id,"https://imgur.com/MlyTC8b",{caption : "Here you go ! \nFunctions that receive functions are called higher-order functions.\nFunctions that get passed to other functions are called callback functions.\nIn this example: We first define two functions: add, and multiply. Later on, we define a function called “calculate” which can receive three arguments: the first two are the values that we want to do some calculation with, and the third is the function that we can pass.\nFind more information about callback functions in javascript here https://www.theavocoder.com/complete-javascript/2018/12/21/callbacks"});
    }  
    //promise
    const promises = "promise";
    if (msg.text.toString().toLowerCase().includes(promises)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/fb7oTQA",{caption : "Here you go ! \nWith promises, we can postpone the execution of a code block until another operation is completed. This way, other operations can keep running without interruption.\nA promise can either resolve, or reject. A promise resolves if it actually did what we expected it to do, just like it “promised”. However, if anything went wrong for any reason, the promise rejects.\nLearn more about promises here https://www.theavocoder.com/complete-javascript/2018/12/20/promises"});
        }  
    //async/await
    const asyncs = "async";
    if (msg.text.toString().toLowerCase().includes(asyncs)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/HZpRyP0",{caption : "Here you go ! \nAn async function is syntactic sugar over promises, the code looks much cleaner. Its asynchronous code looks and behaves a little more like synchronous code. With async/await, you really wait for one promise to resolve before moving to the next line.We can access the await keyword in a function if it has the keyword async before it. Any async function returns a promise implicitly, and the resolve value of the promise will be whatever you return from the function, which is “data” in our case.\nLearn more about async/await here https://www.theavocoder.com/complete-javascript/2018/12/20/asyncawait"});
        } 
    const loops = "loop";
    if (msg.text.toString().toLowerCase().includes(loops)) {
        bot.sendPhoto(msg.chat.id,"https://imgur.com/WYa1LjS",{caption : "Here you go ! \nIn order to iterate over data in JavaScript or do something repeatedly, we use loops.This is how you would write a for loop to loop through an array.\nLearn more about loops here https://www.theavocoder.com/complete-javascript/2018/12/20/loops"});
        }  
    });
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id,`Hi ${msg.from.first_name} I can teach you a thing or two about javascript type /keywords to see keywords that I understand`);
       
    bot.sendPhoto(msg.chat.id,"https://imgur.com/4TDaHNU",{caption : "Here is an example of a conversation you can have with me.If you send me something and I dont reply it means your text doesn't have a keyword that I understand."});
    });
bot.onText(/\/keywords/,(msg) => {
    bot.sendMessage(msg.from.id, `Hello ${msg.from.first_name} here are the keywords that I understand:\n
    1.hi\n
    2.bye\n
    3.hello\n
    4. data type\n
    5.promise\n
    6.variable\n
    7.array\n
    8.function\n
    9.object\n
    10.async\n
    11.loop\n
    12.if-else\n
    13.condition\n
    14.callback\n
    More javascript concepts will be added in future\n
    A sentence with any of these keywords will get a reply which contains an image that has code examples,an explanation of the javascript concept and a link to a resource where you can learn more.\n
    For example if you want to learn about variables in javascript you could simply type "variable" or "Show me variables".\n You can write a sentence in any way you want so long as it contains one of the keywords listed above.
    `);
})
app.listen(port,()=> {
    console.log(`Server listening on port ${port}`)
});