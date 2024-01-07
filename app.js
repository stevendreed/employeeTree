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
            'VIEW ALL employees',
            'ADD A department',
            'ADD A role',
            'ADD A employee',
            'UPDATE A department',
            'UPDATE A role',
            'UPDATE AN employee',
            'DELETE A department (caution!)',
            'DELETE A role (caution!)',
            'DELETE AN employee (caution!)'
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