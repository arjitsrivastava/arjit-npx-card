#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinner = require('cli-spinner');
clear();

const actions = {
    SEND_EMAIL: {
        name: `Send me an ${chalk.green.bold("email")}?`,
        action: () => {
            open("mailto:arjitsrivastava13@gmail.com");
            console.log("\nDone, see you soon at inbox.\n");
        }
    },
    DOWNLOAD_RESUME: {
        name: `Download my ${chalk.blue.bold("Resume")}?`,
        action: () => {
            const loader = ora({
                text: ' Downloading Resume',
                spinner: cliSpinner.Spinner.spinners.dots,
            }).start();

            let fileId = '1MfccOf-Lh3An5gAUXez0DoJ-ArPA4EAY';
            let driveDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

            let pipe = request(driveDownloadLink).pipe(fs.createWriteStream('./arjit-resume.pdf'));
            pipe.on("finish", function () {
                let downloadPath = path.join(process.cwd(), 'arjit-resume.pdf');
                console.log(`\nResume Downloaded at ${downloadPath} \n`);
                open(downloadPath);
                loader.stop();
            });
        }
    },
    SCHEDULE_MEETING: {
        name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
        action: () => {
            open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3P1btp7rkRWUbUonywyZuNMGsrOA8YI-E8LBPwqyayNaV-JJ14UpbQ7uvCGMK3ZE80hjTOfeIa?gv=true');
            console.log("\nSee you at the meeting.\n");
        }
    },
    QUIT: {
        name: "Just quit.",
        action: () => {
            console.log("Good luck!\n");
        }
    }
};

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "userAction",
        message: "What you want to do?",
        choices: Object.values(actions).map(action => action.name),
    }
];

const data = {
    name: chalk.bold.green("             Arjit Srivastava"),
    work: `${chalk.white("Engineering manager at")} ${chalk
        .hex("#2b82b2")
        .bold("Delivery Hero")}`,
    github: chalk.gray("https://github.com/") + chalk.green("arjitsrivastava"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("arjitsrivastava"),
    web: chalk.cyan("https://www.arjitsrivastava.com/"),
    npx: chalk.red("npx") + " " + chalk.white("arjitsrivastava"),

    labelWork: chalk.white.bold("       Work:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const card = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "Engineering Leader adept at leading tech teams and driving product success."
        )}`,
        `${chalk.italic("Passionate about technology, thriving in fast-paced settings.")}`,
        `${chalk.italic(
            "Open to engaging leadership roles and innovative collaborations."
        )}`,
        `${chalk.italic(
            "Come say hi to me!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);


console.log(card);

const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => {
    const action = Object.values(actions).find(action => action.name === answer.userAction);
    action.action();
});
