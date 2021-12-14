require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: { 
      url: String(process.env.REACT_APP_INFURA_API_ROPSTEN_KEY),
      accounts: [process.env.REACT_APP_PRIVATE_KEY_FIERCE]
    }, 
    rinkeby: { 
      url: String(process.env.REACT_APP_INFURA_API_RINKEBY_KEY),
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    }, 
    mainnet: { 
      url: String(process.env.REACT_APP_INFURA_API_MAINNET_KEY),
      accounts: [process.env.REACT_APP_PRIVATE_KEY_FIERCE]
    }
  },
  etherscan: {
    apiKey: String(process.env.REACT_APP_ETHERSCAN_API_KEY)
  }
};
