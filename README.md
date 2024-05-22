# WhatsApp to Telegram Bridge

This project creates a bridge between WhatsApp and Telegram, allowing messages from a specific WhatsApp group to be sent to a Telegram channel.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project leverages the `whatsapp-web.js` library to interact with WhatsApp Web and the `node-telegram-bot-api` to send messages to a Telegram channel. It listens for incoming messages in a specified WhatsApp group and forwards those messages to a configured Telegram channel.

## Features

- Generates a QR code for WhatsApp Web login.
- Listens to messages in a specified WhatsApp group.
- Forwards messages to a Telegram channel.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/whatsapp-telegram-bridge.git
    cd whatsapp-telegram-bridge
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the necessary environment variables (see [Configuration](#configuration)).

## Usage

1. Start the application:

    ```bash
    node index.js
    ```

2. Scan the QR code with your WhatsApp app to log in.

3. The application will start listening for messages in the specified WhatsApp group and forwarding them to the configured Telegram channel.

## Configuration

Create a `.env` file in the root directory with the following variables:

```env
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHANNEL_ID=your-telegram-channel-id
SPECIFIC_CHAT_NAME=name-of-the-whatsapp-group
