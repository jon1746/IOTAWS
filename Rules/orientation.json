{
  "sql": "SELECT * FROM 'orientation'",
  "ruleDisabled": false,
  "actions": [{
      "dynamoDB": {
          "tableName": "orientation",
          "roleArn": "arn:aws:iam::123456789012:role/trexin-iot-role",
          "hashKeyField": "topic",
          "hashKeyValue": "${topic(2)}",
          "rangeKeyField": "timestamp",
          "rangeKeyValue": "${timestamp()}"
      }
  }]
}