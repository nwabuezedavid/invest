from django.db import models

# Create your models here.



class siteedit(models.Model):
    name = models.CharField( max_length=500 ,blank=True, null=True,)
    email = models.CharField( max_length=500 ,blank=True, null=True,)
    domain = models.CharField( max_length=500 ,default=name, blank=True, null=True,)
    headOffice = models.CharField( max_length=500 ,blank=True, null=True,) 
    dis = models.TextField( blank=True, null=True,)
    phone = models.CharField( max_length=500 ,blank=True, null=True,)
    facebooklink = models.CharField( max_length=500 ,blank=True, null=True,)
    twiiterlink = models.CharField( max_length=500 ,blank=True, null=True,)
    instergram = models.CharField( max_length=500 ,blank=True, null=True,)
    youtubelink = models.CharField( max_length=500 ,blank=True, null=True,)
    logo = models.TextField( blank=True, null=True,)
    image1 = models.TextField( blank=True, null=True,)
    idx = models.IntegerField( default=1) 
    

   
    def __str__(self):
        return self.name