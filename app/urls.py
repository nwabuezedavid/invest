
# Create your views here.
from app.views import *

from django.urls import path
urlpatterns = [
    path("",home, name="home"),
    path("faq/",faq, name="faq"),
    path("login/",connectwallet, name="connectwallet"),
    path("register/",assignwallet, name="assignwallet"),
]