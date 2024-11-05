from django.shortcuts import render
from django.shortcuts import render
from .models import * 
from .serili import * 
from django.shortcuts import render
from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required


def home(request):
    conx={
    # "site": siteedit.objects.get(idx=1)   ,
       
     
    }
    return render(request, "home.html", conx)


def faq(request):
    conx={
    # "site": siteedit.objects.get(idx=1)   ,
       
     
    }
    return render(request, "faq.html", conx)

def connectwallet(request):
    conx={
    # "site": siteedit.objects.get(idx=1)   ,
       
     
    }
    return render(request, "auth/login.html", conx)

def assignwallet(request):
    conx={
    # "site": siteedit.objects.get(idx=1)   ,
       
     
    }
    return render(request, "auth/register.html", conx)