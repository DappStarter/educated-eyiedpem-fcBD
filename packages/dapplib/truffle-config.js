require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remain quality harvest clinic bright slim'; 
let testAccounts = [
"0xa7a63b64c3991dde0dbcd1313b6febe7f08fdb1b3ea313c20eb5c459b8072619",
"0xfcbb1f9f3a10cbd9d71961e727c563e3f02b0ed21a6b5f8bc69db32737599efa",
"0xe8fc53e0c9c231050e56bd5d725748f064a18e1910c21c2bacf176020883f293",
"0x175499762be959c1da1e7f70c29b05f0f83d85c1a0bc05db59ae715001c7137c",
"0x07d5070499c0c6fae9a75500ee02e7dfda54a5929673884dc03749bf7fc1c1f7",
"0xcf1012af6e0a65f63517cfd54a2b8adac97d1f5dd446b8a9adf79061671ef8ec",
"0x07a2de8cc2452d2c6ccf261c2b0d5d74efc46c9b2e1148a57a508335f04a76d1",
"0x820b42905614b6aa1d569c1a02a1e794f884176ff6fe96b0d6b582e114077ab8",
"0xd2606bd851d4db846d7a9966ff66a5d1ddd5563ca6ca664dfb3c73e4f7eb36c0",
"0x4a1bd63a49cd973f12f80a7925543104e348235021432a0f720064c66e205928"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


