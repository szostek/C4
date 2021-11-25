const Web3 = require('web3')
//// in web3 instance below, add infura RPC or localhost address for node
const web3 = new Web3()

export const generatedAccount = web3.eth.accounts.create()

// const password = 'tempPass'

export const accountEncrypted = (account, password) => {
    return web3.eth.accounts.encrypt(account.privateKey, password)
}


export const accountDecrypted = (account, password) => {
    return web3.eth.accounts.decrypt(account, password)
}
