from django.shortcuts import render
from django.forms import Form




# Create your views here.
def loginhome(request):
    if request.method=='POST':
        print(request.POST)
    return render(request,'login.html')
 
# Create your views here.
