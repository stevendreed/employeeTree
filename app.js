/*
   app.js

   script file which executes the application
   note: function app() ~= main()
*/

import inquirer from 'inquirer';

// const express = require('express');
import mysql from 'mysql2';
import queries from './controller/queries.js';
import dotenv from 'dotenv/config';

// require('dotenv').config();

// console.log(process.env);

const db = mysql.createConnection(
    {
        host: 'localhost', 
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    console.log(`connected to ${process.env.DB_NAME} as ${process.env.DB_USER}`)
);

// hack way to do this : debug .env way @TODO
// const db = mysql.createConnection(
//     {
//         host : 'localhost',
//         database: 'company_tree',
//         user: 'root',
//         password: 'password'
//     },
//     console.log('connected to company_tree')
// );


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

const queryDb = function(query)
{
    return new Promise(function(res, rej)
    {
        db.query(query, 
            function(err, rows){
                if (!rows)
                {
                    throw Error(`no rows: ${query} is undefined.`);
                }
                else
                {
                    resolve(rows);
                }
            })
    })
}

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
                    switch (answers.menuSelection)
                    {
                        case 'VIEW ALL departments':
                            // console.log('ping!');
                            // db.query(queries['VIEW ALL departments'])
                            //     .then(response =>
                            //     {
                            //         console.log(response);
                            //     })
                            //     .catch(err =>
                            //     {
                            //         console.log(`\nSTART ERROR:\n`,err,`\nEND ERROR`);
                            //     });
                            // let dbResp = db.query(queries['VIEW ALL DEPARTMENTS'],
                            //     function(err, rows)
                            //     {
                            //         if (rows === undefined)
                            //         {
                            //             throw new Error('rows is undefined: ', err);
                            //         }
                            //         else
                            //         {
                            //             console.log(rows);
                            //         }
                            //     })
                            queryDb(queries['VIEW ALL departments'])
                                .then(result => 
                                    {
                                        render(result);
                                    })
                                .catch(err => 
                                    {
                                        console.log(err)
                                    });
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
    db.connect(err => {
        if (err)
        {
            console.log('\nERROR connecting to MySQL DB');
        }
        console.log('connected to mySQL DB :)');
    })
    mainMenu();
    db.end();
}


app();