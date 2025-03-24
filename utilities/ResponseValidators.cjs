const Ajv = require("ajv")

const ajv = new Ajv();

function schemaValidate(schema , data){
    const isValid = ajv.validate(schema, data);
    return isValid ? null : ajv.errors;
}

module.exports = schemaValidate