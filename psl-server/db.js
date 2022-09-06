
const { CreateTableCommand, DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient} = require("@aws-sdk/lib-dynamodb");
const { serviceListingsTableParams } = require('./db-table-params');

const REGION = 'us-west-1';
const END_POINT = 'http://localhost:8000';
const ACCESS_KEY_ID = 'accessKeyId';
const SECRET_ACCESS_KEY = 'secretAccessKey';

const dbClient = new DynamoDBClient({ 
    endpoint: END_POINT,
    region: REGION,
    credentialDefaultProvider: () =>  {
        return {
            accessKeyId: ACCESS_KEY_ID,
            secretAccessKey: SECRET_ACCESS_KEY,
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


// Configurations from:
// https://docs.amazonaws.cn/en_us/sdk-for-javascript/v3/developer-guide/dynamodb-example-dynamodb-utilities.html
const marshallOptions = {
    // Whether to automatically convert empty strings, blobs, and sets to `null`.
    convertEmptyValues: false, // false, by default.
    // Whether to remove undefined values while marshalling.
    removeUndefinedValues: false, // false, by default.
    // Whether to convert typeof object to map attribute.
    convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
    // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
    wrapNumbers: false, // false, by default.
};

const translateConfig = { marshallOptions, unmarshallOptions };

// Document client is a higher abstraction, where we do not need to specify data types.
const ddbDocClient = DynamoDBDocumentClient.from(dbClient, translateConfig);


module.exports = {
    createTables,
    ddbDocClient,
};
