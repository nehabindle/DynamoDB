const AWS = require("aws-sdk");
AWS.config.update({region: 'us-west-2'});

const docClient =  new AWS.DynamoDB.DocumentClient();

// docClient.get({
//     TableName: 'td_notes_test',
//     Key: {
//         user_id: 'A',
//         timestamp: 1

//     }
// }, (err, data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(data)
//     }
// });

// docClient.query({
//     TableName: 'td_notes_test',
//     KeyConditionExpression: "user_id = :uid",
//     ExpressionAttributeValues:{
//         ":uid": "A"
//     }
// }, (err, data)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             console.log(data)
//         }
//     })

docClient.scan({
    TableName: 'td_keys',
    
}, (err, data)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(data)
            }
 });

// docClient.batchWrite({
//     RequestItems:{
//         'td_notes_test':{
//             keys:[
//                 {
//                     user_id: 'A',
//                     timestamp: 1

//                 },
//                 {
//                     user_id: 'B',
//                     timestamp: 2

//                 }
//             ]
//         },
//         'td_notes_sdk': {
//             Keys: [
//                 {
//                     user_id:'11',
//                     timestamp: 12
//                 }
//             ]
//         }

//     }
// }, (err, data)=>{
//                 if(err)
//                 {
//                     console.log(err);
//                 }
//                 else
//                 {
//                     console.log(data)
//                 }
//      });