
from . models import *
from django.contrib.auth.models import User
from django import forms

class userFrom(forms.ModelForm):
    class Meta:
        model = User
        fields =["username","email","first_name","is_superuser"] 
        
  
     