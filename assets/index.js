import fs from 'fs';
import inquirer from 'inquirer';
let cards = [];

const numberValidator = async (input) => {
    if (isNaN(input)) {
        input = '';
        return false
    }

    return true;
}

const addNewMember = [
    {
        type: 'confirm',
        message: 'Do you want to add another team member?',
        name: 'addMember',

    },
];

const MemberRole = [

    {
        type: 'list',
        message: 'What is the member\'s role?',
        choices: ['Engineer', 'Intern'],
        name: 'memberRole'
    }
];

const managerRole = [

    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'memberName'
    },
    {
        type: 'number',
        message: 'Id Number:',
        name: 'memberId',
        validate: numberValidator
    },
    {
        type: 'input',
        message: 'What is the manager\'s email address?',
        name: 'memberEmail'
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'memberOffice'
    },
];

const engineerRole = [

    {
        type: 'input',
        message: 'What is the engineer\'s name?',
        name: 'memberName'
    },
    {
        type: 'number',
        message: 'Id Number:',
        name: 'memberId',
        validate: numberValidator
    },
    {
        type: 'input',
        message: 'What is the engineer\'s email address?',
        name: 'memberEmail'
    },
    {
        type: 'input',
        message: 'What is the engineer\'s Github username?',
        name: 'memberGithub'
    },
];

const internRole = [

    {
        type: 'input',
        message: 'What is the intern\'s name?',
        name: 'memberName'
    },
    {
        type: 'number',
        message: 'Id Number:',
        name: 'memberId',
        validate: numberValidator
    },
    {
        type: 'input',
        message: 'What is the intern\'s email address?',
        name: 'memberEmail'
    },
    {
        type: 'input',
        message: 'What is the intern\'s school?',
        name: 'memberSchool'
    },
];

async function addTeamMember() {
    let cont = await inquirer.prompt(addNewMember);
    console.log(cont.addMember);
    while (cont.addMember) {
        let role = await inquirer.prompt(MemberRole);
        let teamMember = await buildTeamMember(role.memberRole);
        cardBuilder(teamMember);
        cont = await inquirer.prompt(addNewMember);
    }
    return
}

async function buildTeamMember(role) {
    const teamMember = {};
    let questionSet;
    switch (role.toLowerCase()) {
        case 'manager':
            questionSet = managerRole;
            break;
        case 'engineer':
            questionSet = engineerRole;
            break;
        case 'intern':
            questionSet = internRole;
            break;
        default:
            throw new Error('Not a valid team role!');
            break;
    }
    await inquirer.prompt(questionSet)
        .then((answers) => {
            teamMember.role = role;
            teamMember.name = answers.memberName;
            teamMember.id = answers.memberId;
            teamMember.email = `Email <a href="mailto:${answers.memberEmail}">${answers.memberEmail}</a>`;
            switch (role.toLowerCase()) {
                case 'manager':
                    teamMember.contact = `Office Number: ${answers.memberOffice}`;
                    break;
                case 'engineer':
                    teamMember.contact = `Github: <a href="https://github.com/${answers.memberGithub}">${answers.memberGithub}</a>`;
                    break;
                case 'intern':
                    teamMember.contact = `School: ${answers.memberSchool}`;
                    break;

                default:
                    throw new Error('Not a valid team role!');
                    break;
            }

        })
    return teamMember;

}

function cardBuilder(teamMember) {
    let card = `<div class="inline-block max-w-sm min-w-fit rounded overflow-hidden shadow-lg bg-slate-100">
                    <div class="px-6 py-4 bg-sky-700">
                        <div class="font-bold text-2xl mb-2 text-slate-50">${teamMember.name}</div>
                        <p class="text-xl text-slate-50">
                            ${teamMember.role}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <table class="border border-slate-700 p-2">
                            <tbody>
                                <tr>
                                    <td class="border border-slate-700 p-1">
                                    ${teamMember.id}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 p-1">
                                        ${teamMember.email}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 p-1">
                                        ${teamMember.contact}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`

    cards.push(card);
    return card;
};

function buildPage(teamMemberCards) {
    let cardsEl = '';
    console.log('in buildpage');
    for (const card of teamMemberCards) {
        cardsEl += card;
    }
    let page = `<!DOCTYPE html>
    <html lang="en-US">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/output.css" type="text/css">
        <title>Team Profile Generator</title>
    </head>
    
    <body class="bg-slate-50">
        <header>
            <h1 class=" py-8 font-sans text-5xl bg-sky-700 text-center align-middle text-slate-50">Team Roster</h1>
        </header>
        <main>
            <section class="grid grid-cols-3 flex-wrap gap-4 py-8 justify-start content-start container mx-auto">
               ${cardsEl}
            </section>
        </main>
    </body>  
    </html>`
    fs.writeFile('./index.html', page, (err) => {
        if (err) throw err;
    });
    console.log('page created');
    return
};

async function init() {
    let manager = await buildTeamMember('Manager');
    cardBuilder(manager);
    await addTeamMember();
    buildPage(cards);

}
// Add manager prompt
// Ask for name, id, email address, and office number
// Add a new user propmt
// If yes, choose intern or engineer
// Engineer ask for name, id, email, and github username // back to menu
// Intern ask for name, id, email, and school // back to menu
// If no, move to html generation
// Confirm complete
// Generate HTML Page with Team Roster

init();