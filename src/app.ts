// eslint-disable-next-line import/no-extraneous-dependencies
import bot  from './bot/index';

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));