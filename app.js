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
    },
    {
        'type': 'confirm',
        'name': 'continue',
    }
];

const mainMenu = async function()
{
    return inquirer
        .prompt(questions)
        .then(answers =>
            {
                console.log('\nSTART ANSWERS:\n',
                    {...answers},
                    '\nEND ANSWERS');
                /*
                   RECURSIVE FUNCTION
                   this enables us to loop through the questions until the user
                   confirms they're finished with selections. Enables mass-
                   editing, and inquirer _should_ force a y/n answer which
                   avoids potential problem of an infinite loop w/o hitting our
                   base case
                */
                if (answers.continue)
                {
                    return mainMenu();
                }
                else
                {
                    return answers;
                }
            })
        .catch(err =>
            {
                console.log(`\nSTART ERROR:\n`,`${err}`,`\nEND ERROR`);
            });
}

const app = async function()
{
    // let resp = await mainMenu();

    // console.log(resp);

    // do
    // {
    //     inquirer
    //     .prompt(questions)
    //     .then(answers =>
    //         {
    //             console.log('\nSTART ANSWERS:\n',{...answers},'\nEND ANSWERS');
    //         })
    //     .catch(err =>
    //         {
    //             console.log(`\nSTART ERROR:\n`,`${err}`,`\nEND ERROR`);
    //         });
    // } while (answers.continue === 'y' );

    mainMenu();
}


app();