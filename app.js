/*
   app.js

   script file which executes the application
   note: function app() ~= main()
*/

import inquirer from 'inquirer';

// const express = require('express');
import mysql from 'mysql';

const db = mysql.createConnection(
    {
        host: 'localhost', 
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    console.log(`connected to ${process.env.DB_NAME} as ${process.env.DB_USER}`)
);

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
            'DELETE AN employee (caution!)',
            'QUIT the application'
        ]
    },
    // {
    //     'type': 'confirm',
    //     'name': 'continue',
    // }
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
                if (answers.menuSelection !== 'QUIT the application')
                {
                    switch (answers)
                    {
                        case questions[0].choices[0]:
                            db.query()
                            break;
                    
                        default:
                            break;
                    }
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