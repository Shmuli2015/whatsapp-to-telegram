require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const generateQRCode = require('./services/qrCodeService');
const logClientReady = require('./services/clientReadyService');
const handleIncomingMessage = require('./services/MessageHandler');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox'],
        timeout: 60000
    },
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
    }
});

console.log("Starting login process...");

client.on('qr', (qr) => generateQRCode(qr));
client.on('ready', logClientReady);
client.on('message', (message) => handleIncomingMessage(message));

client.initialize();
