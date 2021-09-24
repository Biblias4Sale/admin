
export const Envoirment = process.env.NODE_ENV
export const SERVERPORT = process.env.SERVERPORT

export const ApiURL = Envoirment === 'development' ? 'http://localhost:3002' : 'https://noiloan.herokuapp.com'
