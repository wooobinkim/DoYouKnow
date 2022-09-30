from django.urls import path
from . import views

urlpatterns = [
    path('usually/<str:keyword>/<int:num>/', views.usallyview),
    path('detail/<str:keyword>/<str:nation_code>/', views.detailview),
    
]