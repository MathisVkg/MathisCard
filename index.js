#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();


// Data for the card
const data = {
    name: chalk.bold.green("        Mathis Vankoekelberg"),
    work: `${chalk.white("Junior Front-End Web developer")} ${chalk
        .hex("#2b82b2")
        .bold("BYU-I")}`,
    // blog: chalk.gray("https://dev.to/") + chalk.whiteBright("#"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("Meru_em_"),
    github: chalk.gray("https://github.com/") + chalk.green("MathisVkg"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("mathis-vkg/"),
    web: chalk.cyan("#"),
    npx: chalk.red("npx") + " " + chalk.white("mathisvkg"),

    labelWork: chalk.white.bold("       Work:"),
    labelBlog: chalk.white.bold("     Blog:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        // `${data.labelBlog}  ${data.blog}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "The legends remain in history, other stay in oblivion"
        )}`,
        `${chalk.italic("I'd rather swim in denial,")}`,
        `${chalk.italic("than in the Nile.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);