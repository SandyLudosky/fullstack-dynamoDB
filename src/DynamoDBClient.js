const AWS = require('aws-sdk');

// create a new DynamoDB client
// which provides connectivity b/w the app
// and the db instance
const options = {
    accessKeyId: process.env.ACCESS_KEY, 
    secretAccessKey: process.env.SECRET_ACCESS_KEY, 
    region: 'us-east-1'
}
const tableName = 'ProductCatalog';

AWS.config.update(options);
const client = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: tableName
};

module.exports = {
    client, 
    params
}