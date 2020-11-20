import time
import json
from flask import Flask
from dynamo import CMS, Translations

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/translations')
def get_translations():
    tr = Translations()
    return {'list': tr.scan()}



@app.route('/cms')
def get_content():

    en = CMS()
    # content_item = {
    #     'language':'en',
    #     'component':'homepage',
    #     'content':{'greeting':'hello, world!'}
    # }
    # response = en.put_item(content_item)
    page = en.get_content_by_language(language='en', component='homepage')
    return page['content']

