from pytrends.request import TrendReq

# Only need to run this once, the rest of requests will use the same session.
pytrend = TrendReq(hl='ko')

keyword = '우영우'
# Create payload and capture API tokens. Only needed for interest_over_time(), interest_by_region() & related_queries()
pytrend.build_payload(kw_list=[keyword],timeframe='today 5-y')

# Interest Over Time
# interest_over_time_df = pytrend.interest_over_time()
#print(interest_over_time_df.head())

# Interest by Region
# interest_by_region_df = pytrend.interest_by_region()
#print(interest_by_region_df.head())

# Related Queries, returns a dictionary of dataframes
related_queries_dict = pytrend.related_topics()
print(related_queries_dict)
print('---------------------------------')

# for i in range(0, len(related_queries_dict[keyword]['top'])):
#     print(related_queries_dict[keyword]['top']['topic_title'][i])
    # print(related_queries_dict[keyword]['top']['value'][i])


# for i in range(0, len(related_queries_dict[keyword]['rising'])):
#     print(related_queries_dict[keyword]['rising']['topic_title'][i])
    # print(related_queries_dict[keyword]['rising']['value'][i])


#print(related_queries_dict['이상한변호사 우영우']['top']['query'])
#print(related_queries_dict['이상한변호사 우영우']['top']['value'])
print('---------------------------------')
# print(related_queries_dict['이상한변호사 우영우']['rising'])
# Get Google Hot Trends data
trending_searches_df = pytrend.trending_searches()
#print(trending_searches_df.head())

# Get Google Hot Trends data
today_searches_df = pytrend.today_searches()
#print(today_searches_df.head())

# Get Google Top Charts
#top_charts_df = pytrend.top_charts(2018, hl='en-US', tz=300, geo='GLOBAL')
#print(top_charts_df.head())

# Get Google Keyword Suggestions
suggestions_dict = pytrend.suggestions(keyword='손흥민')