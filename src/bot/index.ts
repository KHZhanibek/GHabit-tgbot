// eslint-disable-next-line import/no-extraneous-dependencies
import { Telegraf } from 'telegraf';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { message } from 'telegraf/filters';

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN || 'TOKEN');

bot.start((ctx) => {
  ctx.reply('Welcom to the Ghabit - group habit tracker!:)\nYou can use this bot in the group chat.');
});

export default bot;