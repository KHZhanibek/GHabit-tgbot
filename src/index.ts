// eslint-disable-next-line import/no-extraneous-dependencies
import { Telegraf } from 'telegraf';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { message } from 'telegraf/filters';

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN || 'TOKEN');

bot.start((ctx) => {
  ctx.reply('Welcom to the Ghabit - group habit tracker!:)\nAdd this bot to the group chat and use it alone or with others.');
});

bot.launch();

// Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));