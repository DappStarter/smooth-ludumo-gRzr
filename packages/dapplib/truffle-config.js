require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard renew stereo modify hope kangaroo army gentle'; 
let testAccounts = [
"0xe6be505e9d128ea05da5d5d2327a90a95aa3ba39aa215bfbdd15e1d5cadbdd38",
"0xc3891e673aeb0db35dad6e21eb31c86252704e6c7b1e03c6756a46e1ccf39a6b",
"0xeb714cd7bdf7bdc7e227381a0d035b1805ec818536ab9b3bdf68e44f81c0a1cc",
"0xeee2134682d56c1035ebb278cf6f550da61df8bd7b344a76f4501d2f6ec72888",
"0xbcdf21ec92ece75119c50c8ec64f1c5241092bfb748d285c1ef0de230d21e1dc",
"0x0c7c4b129b68c0a79c666477c36c3eebcfd05c971babafd153182d829fd9459d",
"0xffb6ae1ea8167b6e8f67f5190227f1dba1403510c213b236a8d9af987ba44812",
"0x6e73731474f145adb412701d42ef5d2ffdbeda7375948635eefb234686ee653b",
"0x649e7b2f3dc01b86ce8df1b4f446fbe516afff3913145d7a274433a1e6e847fb",
"0x0a662517cbe4ec6fcc15218ebf788fdb49a71613b9bd6c88e0544c9381ae41fb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

