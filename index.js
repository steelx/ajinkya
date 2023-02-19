#!/usr/bin/env node
import welcome from "cli-welcome";
import chalk from "chalk";

welcome({
	title: `Hello I'm Ajinkya Borade`,
	tagLine: `this is my small introduction!`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `0.0.1`
});

const log = console.log;
const red = chalk.red;
const green = chalk.green;
const yellow = chalk.yellow;
const redUnderline = chalk.rgb(123, 45, 67).underline;
const boldText1 = chalk.hex('#DEADED').bold
const twitterBlue = chalk.hex('#39A7DB').bold
const githubGreen = chalk.hex('#25EF79').bold
const youtubeRed = chalk.hex('#D52121').bold

log(`Profession: ${red('Software Developer')}
Experience: ${green('12 years+')}
Skills: ${yellow('Javascript/Node.js, Typescript, C#')}`);

// Use RGB colors in terminal emulators that support it.
log(`
👔 ${githubGreen('Github')}: ${redUnderline('https://github.com/steelx')}
📥 ${twitterBlue('Twitter')}: ${redUnderline('https://twitter.com/ajinkyax')}
🧲 ${youtubeRed('Youtube')}: ${redUnderline('https://youtube.com/ajinkyax')}
`);
