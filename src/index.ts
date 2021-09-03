import * as AWS from "aws-sdk";

export const handler = async (): Promise<void> => {
    // なんらかの集計処理・・・
    const result = {
        sample_id: Date.now()
    }

    // 集計結果の書き込み
    const documentClient = new AWS.DynamoDB.DocumentClient({
        region: process.env.AWS_REGION ?? "ap-northeast-1",
    });
    await documentClient.put({TableName: process.env.TABLE_NAME ?? "", Item: result}).promise();
};
