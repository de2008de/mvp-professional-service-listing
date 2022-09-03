
const { CreateTableCommand , DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { serviceListingsTableParams } = require('./db-table-params');

const REGION = 'us-west-1';
const dbClient = new DynamoDBClient({ 
    endpoint: 'http://localhost:8000',
    region: REGION,
    credentialDefaultProvider: () =>  {
        return {
            accessKeyId: 'accessKeyId',
            secretAccessKey: 'secretAccessKey',
        }
    },
});


const createTables = async () => {
    try {
        const data = await dbClient.send(new CreateTableCommand(serviceListingsTableParams));
        console.log("Table Created", data);
    } catch (err) {
        console.log("Error at creating tables: ", err);
    }
};

module.exports = {
    createTables,
};
