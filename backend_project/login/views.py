from django.shortcuts import render
from django.forms import Form
from .models import Login_detail



# Create your views here.
def loginhome(request):
    def post(request,self):
        if (request.method=='POST'):
            login_detail= Login_detail()
            login_detail.name=request.POST['Uname']
            login_detail.email=request.POST['Uemail']
            login_detail.role=request.POST['role']
            login_detail.skill=request.POST.getlist('skills')
            login_detail.password=request.POST['Upsw']
            print("sssss",login_detail.save())
    post(request,self=__name__)   
    return render(request,'login.html')
 

