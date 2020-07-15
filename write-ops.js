const AWS = require("aws-sdk");
AWS.config.update({region: 'us-west-2'});

const docClient =  new AWS.DynamoDB.DocumentClient();

// docClient.put({
//     TableName: 'td_notes_sdk',
//     Item: {
//         user_id: 'bc',
//         timestamp: 2,
//         title: 'title',
//         content: "content"
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

// docClient.update({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames : {
//         '#t': 'title'
//     },
//     ExpressionAttributeValues: {
//         ':t': 'updated title'
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
//     });

// docClient.delete({
//     TableName: 'td_notes_sdk',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     }
// }, (err, data)=>{
//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 console.log(data)
//             }
//  });

docClient.batchWrite({
    RequestItems:
    {
        'td_notes_sdk':[
            {
                DeleteRequest: {
                    Key: {
                        user_id: 'bc',
                        timestamp: 2
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                                user_id: '11',
                                timestamp: 12,
                                title: 'title1',
                                content: "content1"
                            }
                }
            },
            {
                PutRequest: {
                    Item: {
                                user_id: '12',
                                timestamp: 13,
                                title: 'title13',
                                content: "content13"
                            }
                }
            }


        ]
    }
},(err, data)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log(data)
                }
     });