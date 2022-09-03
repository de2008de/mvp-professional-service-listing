const { ScanCommand } = require('@aws-sdk/client-dynamodb');
var express = require('express');
var router = express.Router();
var { dbClient } = require('../db');
var { serviceListingsTableParams } = require('../db-table-params');

router.get('/', async (req, res) => {
    const params = {
        TableName: serviceListingsTableParams.TableName,
    }
    const data = await dbClient.send(new ScanCommand(params));
    res.send(data.Items);
});

module.exports = router;
