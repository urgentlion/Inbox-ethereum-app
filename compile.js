const path = require('path');
const fs = require('fs');
const solc = require('solc');

//cross platform compatibility resolver
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');

//compiled statement
console.log(solc.compile(source, 1).contracts[':Inbox']);

