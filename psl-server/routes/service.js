const { PutCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb');
const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const { ddbDocClient } = require('../db');
const { serviceListingsTableParams } = require('../db-table-params');

TABLE_NAME = serviceListingsTableParams.TableName;

router.get('/', async (req, res) => {
    const params = {
        TableName: TABLE_NAME,
    };
    const data = await ddbDocClient.send(new ScanCommand(params));
    res.send(data.Items);
});

router.post('/', async (req, res) => {
    const { title, content, type, created_by } = req.body;
    if (!title || !content || !type || !created_by) {
        res.send({
            'status': 'failed',
            'error': 'Required fields are missing.',
        })
        return;
    }
    const params = {
        TableName: TABLE_NAME,
        Item: {
            listing_id: 'service-' + crypto.randomUUID(),
            listing_type: type,
            title: title,
            content: content,
            type: type,
            created_by: created_by,
        },
    };
    const data = await ddbDocClient.send(new PutCommand(params));
    res.send(data);
});

module.exports = router;
