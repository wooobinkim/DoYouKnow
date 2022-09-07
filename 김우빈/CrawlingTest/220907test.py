from nltk import word_tokenize, pos_tag, ne_chunk
from nltk import RegexpParser
from nltk import Tree
import nltk
import re
import pandas as pd
import spacy
from konlpy.tag import Okt
from nltk.corpus import stopwords
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver
import googletrans
import pyautogui
import time
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

def news(news_url):
    translator = googletrans.Translator()
    for url_no in news_url:
        driver.get(url_no)

        pyautogui.hotkey('shift', 'F10')
        # for i in range(8):
        #     pyautogui.hotkey('down')
        # pyautogui.hotkey('enter')
        pyautogui.keyDown('t')
        pyautogui.keyUp('t')

        time.sleep(1)

        for c in range(0,5):
            driver.find_element(By.TAG_NAME, 'body').send_keys(Keys.PAGE_DOWN)
            time.sleep(1)

        html = driver.page_source
        soup = BeautifulSoup(html)

        str = ""
        str2 = ""
        result = ""
        for text in soup.findAll("p"):

            str += text.get_text() + "\n"
            str2 += text.get_text() + "\n"
        
            result += str
            str = ""

        np_tag(result)

    return



def np_tag(text):
    hangul = re.compile('[^ ㄱ-ㅣ가-힣]+')
    text = hangul.sub('', text)

    hannanum = Okt()
    df = pd.DataFrame(columns = ['CHUNK'])
    doc = hannanum.nouns(text)
    news_desc = '\n'.join(doc)

    global whole_text
    whole_text += news_desc
    # print(whole_text)
    return news_desc


def Url(search):
    url_temp = 'https://www.google.com/search?q={search}&tbm=nws'.format(search=search)
    for pageNo in range(1,9,10):
        url = url_temp + "&start={pageNo}".format(pageNo=pageNo)
        driver.get(url)

        html = driver.page_source
        soup = BeautifulSoup(html)
        
        news_urls = []
        # 검색 했을 때 제목과 breadcrumbs, 접속주소를 가져올 것이다.
        list = soup.select('#search .MjjYud>div>div>div')
        if not list:
            print("no articles")
            break

            

        for i in list:
            if i.select_one('div>a>div>div:nth-child(2)>div:nth-child(2)'):
                news_urls.append(i.select_one(".WlydOe").get("href"))
            else:
                print("no texts")

        # print(news_urls)
        # np_tag(news(news_urls))
        news(news_urls)



driver = webdriver.Chrome()

search = 'korean dramas'
whole_text = ""
Url(search)

driver.quit()

f = open("C:/Users/Kim/Desktop/특화프로젝트/Sub2/S07P22B208/김우빈/Crawilng_Keyword_Data/korean_drama.txt", 'w', encoding='utf-8')
f.write(whole_text)
# for no_capital in no_capitals:
#     no_stops = [word for word in no_capital if not word in stops]
#     for tmp in no_stops:
#         #testmemo=testmemo+tmp+'\n'
#         f.write(tmp+'\n')
f.close()