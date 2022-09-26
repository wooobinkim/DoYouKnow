from rest_framework.decorators import api_view
from rest_framework.response import Response
from pytrends.request import TrendReq
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework import status
from rest_framework.status import(
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
)

@api_view(['GET'])
def relativetopkeyword(request,keyword):
    pytrend = TrendReq()
    print(keyword)
    # Create payload and capture API tokens. Only needed for interest_over_time(), interest_by_region() & related_queries()
    pytrend.build_payload(kw_list=[keyword],timeframe ='now 7-d')
    related_queries_dict = pytrend.related_queries()
    a = []
    for i in range(0, len(related_queries_dict[keyword]['top'])):
        tmp= []
        tmp.append(related_queries_dict[keyword]['top']['query'][i])
        tmp.append(related_queries_dict[keyword]['top']['value'][i])
        a.append(tmp)
    return Response(a)


@api_view(['GET'])
def relativerisingkeyword(request,keyword):
    pytrend = TrendReq()
    print(keyword)
    # Create payload and capture API tokens. Only needed for interest_over_time(), interest_by_region() & related_queries()
    pytrend.build_payload(kw_list=[keyword],timeframe ='now 7-d')
    print('rising')
    related_queries_dict = pytrend.related_queries()
    a = []
    for i in range(0, len(related_queries_dict[keyword]['rising'])):
        tmp= []
        tmp.append(related_queries_dict[keyword]['rising']['query'][i])
        tmp.append(related_queries_dict[keyword]['rising']['value'][i])
        a.append(tmp)
    return Response(a)