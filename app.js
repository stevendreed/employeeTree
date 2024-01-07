/*
   app.js

   script file which executes the application
   note: function app() ~= main()
*/

import inquirer from 'inquirer';

const questions = [
    {
        'type': 'list',
        'name': 'menuSelection',
        'choices': [
            'VIEW ALL departments',
            'VIEW ALL roles',
            'VIEW ALL employees'
        ]
    }
];

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