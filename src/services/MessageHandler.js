const TelegramBot = require("node-telegram-bot-api");

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHANNEL_ID = Number(process.env.TELEGRAM_CHANNEL_ID);
const SPECIFIC_CHAT_NAME = process.env.SPECIFIC_CHAT_NAME;

const sendToTelegram = async (text) => {
  console.log({ TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL_ID });
  const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

  try {
    await bot.sendMessage(TELEGRAM_CHANNEL_ID, text);
    console.log("Message sent successfully to Telegram.");
  } catch (error) {
    console.error("Error sending message to Telegram:", {error});
  }
};

const handleIncomingMessage = async (message) => {
  const chat = await message.getChat();
  const {isGroup, name} = chat;

  console.log({isGroup, name});

  if (chat.isGroup && name.includes(SPECIFIC_CHAT_NAME)) {
    console.log({chat});
    try {
      const contact = await message.getContact();

      const senderName = contact.pushname || contact.number;
      const text = `${senderName}:\n ${message.body}`;
      await sendToTelegram(text);
    } catch (error) {
      console.error("Error handling incoming message:", error);
    }
  }
};

module.exports = handleIncomingMessage;
