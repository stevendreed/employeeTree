/*
   app.js

   script file which executes the application
   note: function app() ~= main()
*/

import inquirer from 'inquirer';

const questions = [{}];

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