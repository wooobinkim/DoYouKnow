import requests

#import pymysql
# DoYouKnow_db= pymysql.connect(
#     user='b208', 
#     passwd='b208root', 
#     host='43.201.37.208', 
#     db='RawData', 
#     charset='utf8'
# )

keyword = "BTS"
language = "en"

url_temp = 'https://newsapi.org/v2/everything?apiKey=b7e2285d0d434655b79ad42f6584ae3f&q={search}&language={lang}&sortBy=relevancy&pageSize=10'.format(search=keyword,lang=language)
try:
	response  = requests.get(url_temp, timeout=5, verify=False)

# Timeout 처리
except requests.exceptions.Timeout:
	print('error')

# InterError 및 기타에러 처리
except Exception as e:
	print(e)

print(response.status_code)
print(response['articles'])