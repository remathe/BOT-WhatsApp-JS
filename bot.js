const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) => {
    if (message.body.toLocaleLowerCase() === 'oi') {
         client.sendMessage(message.from, 'Olá eu sou Matheus, seu BOT pessoal, como posso te ajudar ? Digite a opção desejada:');
         client.sendMessage(message.from, '1. Criação de sites');
         client.sendMessage(message.from, '2. Design de sites com Figma');
         client.sendMessage(message.from, '3. Criação de portfólios');
    }
    

    if (message.body.toLocaleLowerCase() === 'bom dia') { 
         client.sendMessage(message.from, 'Olá eu sou Matheus, seu BOT pessoal, como posso te ajudar ? Digite a opção desejada:');
         client.sendMessage(message.from, '1. Criação de sites');
         client.sendMessage(message.from, '2. Design de sites com Figma');
         client.sendMessage(message.from, '3. Criação de portfólios');
}


if (message.body.toLocaleLowerCase() === 'boa tarde') { 
     client.sendMessage(message.from, 'Olá eu sou Matheus, seu BOT pessoal, como posso te ajudar ? Digite a opção desejada:');
     client.sendMessage(message.from, '1. Criação de sites');
     client.sendMessage(message.from, '2. Design de sites com Figma');
     client.sendMessage(message.from, '3. Criação de portfólios');
}

if (message.body.toLocaleLowerCase() === 'boa noite') { 
     client.sendMessage(message.from, 'Olá eu sou Matheus, seu BOT pessoal, como posso te ajudar ? Digite a opção desejada:');
     client.sendMessage(message.from, '1. Criação de sites');
     client.sendMessage(message.from, '2. Design de sites com Figma');
     client.sendMessage(message.from, '3. Criação de portfólios');
}

if (message.body.toLocaleLowerCase() === 'ola') { 
     client.sendMessage(message.from, 'Olá eu sou Matheus, seu BOT pessoal, como posso te ajudar ? Digite a opção desejada:');
     client.sendMessage(message.from, '1. Criação de sites');
     client.sendMessage(message.from, '2. Design de sites com Figma');
     client.sendMessage(message.from, '3. Criação de portfólios');
}

if (message.body.toLocaleLowerCase() === '1') { 
     client.sendMessage(message.from, 'Me mande mensagem no número https://wa.me/+5561994592112');
}

if (message.body.toLocaleLowerCase() === '2') { 
     client.sendMessage(message.from, 'Aguarde um minuto que logo logo alguém irá te responder !');
}

if (message.body.toLocaleLowerCase() === '3') { 
     client.sendMessage(message.from, 'Faz você !');
}
  
});

client.initialize();
