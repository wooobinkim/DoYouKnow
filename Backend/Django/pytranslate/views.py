from rest_framework.decorators import api_view
from googletrans import Translator
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework import status
from rest_framework.status import(
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
)

# 미국, 영국, 일본, 베트남, 인도네시아, 브라질
# en     en    ja     vi      id          pt

@api_view(['GET'])
def usallyview(request, keyword):
    translator = Translator()
    result = translator.translate(keyword, dest='ko').text
    return Response(result)


@api_view(['GET'])
def detailview(request, keyword, nation_code):
    translator = Translator()
    if nation_code == 'en':
        result = translator.translate(keyword, src='ko', dest='en').text
    elif nation_code == 'ja':
        result = translator.translate(keyword, src='ko', dest='ja').text
    elif nation_code == 'vi':
        result = translator.translate(keyword, src='ko', dest='vi').text
    elif nation_code == 'id':
        result = translator.translate(keyword, src='ko', dest='id').text
    elif nation_code == 'pt':
        result = translator.translate(keyword, src='ko', dest='pt').text
    return Response(result)