/*
   app.js

   script file which executes the application
   note: function app() ~= main()
*/

const inquirer = require('inquirer');



const app = function()
{
    inquirer
        .prompt(questions)
        .then(answers =>
            {
                console.log('\nSTART ANSWERS:\n',{...answers},'\nEND ANSWERS');
            })
        .catch(err =>
            {
                console.log(`\nSTART ERROR:\n`,`${err}`,`\nEND ERROR`);
            });
}


app();