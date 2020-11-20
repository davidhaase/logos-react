from datetime import datetime

import boto3
from boto3.dynamodb.conditions import Key
from botocore.exceptions import ClientError

class DynoDB():
    def __init__(self, table_name):
        self.dynamodb = boto3.resource('dynamodb', region_name='us-east-2')
        self.table = self.dynamodb.Table(table_name)

    def load_items(self, item_list):
        for item in item_list:
            self.table.put_item(Item=item)

    def put_item(self, item):       
        response = self.table.put_item(Item=item)
        return response

    def scan(self):
        response = self.table.scan()
        return response['Items']

        
    def get_distinct(self, column):
        distinct_values = []
        response = self.table.scan()
        for value in response['Items']:
            if value[column] not in distinct_values:
                distinct_values.append(value[column])

        return distinct_values

class Translations(DynoDB):
    def __init__(self, table_name='Translations'):
        super().__init__(table_name=table_name)

class CMS(DynoDB):
    def __init__(self, table_name='CMS'):
        super().__init__(table_name=table_name)

    def get_content_by_language(self, language, component):
        try:
            response = self.table.get_item(Key={'language': language, 'component': component})
        except ClientError as e:
            print(e.response['Error']['Message'])
        else:
            return response['Item']
