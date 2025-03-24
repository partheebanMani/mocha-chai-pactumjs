
const dotenvFlow = require('dotenv-flow');
const env = process.env.ENV || 'qa'; // Defaults to 'qa' if ENV is not set
const properties = require(`./props.${env}.json`); // Dynamically loads the right config file
dotenvFlow.config();

const config ={

    env,
    ...properties,
    ...process.env
}

module.exports= config