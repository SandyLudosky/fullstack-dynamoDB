const { v4: uuidv4 } = require('uuid');
const { client, params  } = require("./DynamoDBClient")

module.exports =  {
    readAll: (_ , res) => {
        client.scan(params, (err, data) => {
            if (!err) {
                console.log(data)
                res.contentType = 'application/json';
                res.status(200).send(data);
            }
        });
    }, 
    writeItem: (req, res) => {
        const _params = {
           TableName: 'ProductCatalog',
            Item: {
                // creates a new uuid
                "id": parseInt(uuidv4(), 16),
                // name property passed from body
                "category": req.body.category
            }
        }
        client.put(_params, (err, data) => {
            res.contentType = 'application/json';
            if (err) console.log(err);
            else res.status(200).send(JSON.stringify(data))
        });
    }
}