#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import datetime
import json

from time import sleep
from googleapiclient.discovery import build

from bottle import Bottle
from bottle import route, run, request, response, hook

app = Bottle()

GOOGLE_API_KEY          = "xxxxxxxxxxxxxxxxxxxxxxxxxx"
CUSTOM_SEARCH_ENGINE_ID = "xxxxxxxxxxxxxxxxx:xxxxxxxxxxxx"

DATA_DIR = 'data'

def makeDir(path):
    if not os.path.isdir(path):
        os.mkdir(path)

def getSearchResponse(keyword):
    # 処理日時の格納
    today = datetime.datetime.today().strftime("%Y%m%d")
    time = datetime.datetime.today().strftime("%H%M%S")
    timestamp = datetime.datetime.today().strftime("%Y/%m/%d %H:%M:%S")

    # 保存先ディレクトリの自動生成
    makeDir(DATA_DIR)

    # googleAPIと通信するためのリソースオブジェクトを生成
    service = build("customsearch", "v1", developerKey=GOOGLE_API_KEY)

    page_limit = 1
    start_index = 1
    response = []
    for n_page in range(0, page_limit):
        try:
            sleep(1)
            response.append(service.cse().list(
                q=keyword,
                cx=CUSTOM_SEARCH_ENGINE_ID,
                lr='lang_ja',
                num=3,
                start=start_index
            ).execute())
            start_index = response[n_page].get("queries").get("nextPage")[0].get("startIndex")
        except Exception as e:
            print(e)
            break

    # レスポンスをjson形式で履歴保存
    save_response_dir = os.path.join(DATA_DIR, 'response')
    makeDir(save_response_dir)
    out = {'snapshot_ymd': today, 'snapshot_timestamp': timestamp, 'response': []}
    out['response'] = response
    jsonstr = json.dumps(out, ensure_ascii=False)
    with open(os.path.join(save_response_dir, 'response_' + today + time + '.json'), mode='w') as response_file:
        response_file.write(jsonstr)

    # フロントで必要なデータのみに絞り込む
    print(out['response'])
    for index, item in enumerate(out['response'][0]['items']):
        exist_pagemap = item.get('pagemap')
        if exist_pagemap != None:
            exist_cse_image = item['pagemap'].get('cse_image')
            if exist_cse_image != None:
                imageUrl = item['pagemap']['cse_image'][0]
                break

    return imageUrl

@app.hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

@app.get('/765')
def searchIdolImageUrl():
    # フォーム受け取り
    idol_name = request.query.getunicode('idol_name')

    # 最終的なレスポンスを受け取る（整理済み）
    result = getSearchResponse(idol_name)

    # jsonで返す
    response.content_type = 'application/json'
    return json.dumps({ 'result': result })

if __name__ == '__main__':
    run(app=app, host="0.0.0.0", port=8888, quiet=False, reloader=True)

    # target_keyword = '我那覇響'

    # getSearchResponse(target_keyword)