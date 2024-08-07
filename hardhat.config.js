require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x2c0f6113026697cb413cd12bd60b90a9a4ac273d5d5441d796291b6d910986b3"], //Your private key starting with "0x"
    },
  },
};