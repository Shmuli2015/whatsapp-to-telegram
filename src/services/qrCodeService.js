const qrcode = require('qrcode-terminal');

const generateQRCode = (qr) => {
    console.log('Generating QR Code');
    qrcode.generate(qr, { small: true });
    console.log('QR code generated. Scan it with your phone.');
};

module.exports = generateQRCode;