const serviceListingsTableParams = {
    AttributeDefinitions: [
      {
        AttributeName: "listing_id",
        AttributeType: "S",
      },
      {
        AttributeName: "listing_type",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "listing_id",
        KeyType: "HASH",
      },
      {
        AttributeName: "listing_type",
        KeyType: "RANGE",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
    TableName: "SERVICE_LISTINGS",
    StreamSpecification: {
      StreamEnabled: false,
    },
};

module.exports = {
    serviceListingsTableParams,
};
