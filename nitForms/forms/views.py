from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
import smtplib
import os
import subprocess, sys



@csrf_exempt
def post_views(request):
    if (request.method == "POST"):

        path = os.getcwd()

        # Setting up paths
        modelPath = path + "/forms/models.py"
        adminPath = path + "/forms/admin.py"
        serializerPath = path + "/forms/serializers.py"
        apiPath = path + "/forms/api.py"
        urlPath = path + "/forms/urls.py"
        migratePath = path + "/Server/"


        # process = subprocess.Popen(['/home/ubuntu/Documents/nitjforms/nitjforms/nitForms/Server/migrate.sh'])
        # process.wait()

        # Accessing Database
        title = FormName.objects.all().order_by('-created_at')[0].title
        title = title.replace(" ", "_")

        # Writing Models.py
        f = open(modelPath, 'a')
        f.write("\n\nclass " + title + "(models.Model):\n")
        f.write("    responseID = models.UUIDField(default=uuid.uuid4, editable=False)\n")
        f.write("    responseTime = models.DateTimeField(auto_now_add=True)\n")
        f.write("    responseStatus = models.BooleanField(default=False)\n")
        f.write(
            "    userName = models.CharField(max_length=1000, blank=True)\n")
        f.write(
            "    userMail = models.EmailField(max_length=1000)\n")
        f.write(
            "    userDept = models.CharField(max_length=1000)\n"
        )    
        f.close()
        data = CreateForms.objects.all()
        for i in data:
            question1 = str(i.question)
            question1 = question1.replace(" ", "_")
            modelFunc(modelPath, question1, i.inputType, i.questionFields, title)

        f = open(modelPath, 'a')
        f.write("\n\nclass " + title + "Accepted(models.Model):\n")
        f.write("    acceptedResponseID = models.CharField(max_length=1000)\n")
        f.write("    responseTime = models.DateTimeField(auto_now_add=True)\n")
        f.write("    comment = JSONField(null=True)\n")
        f.write(
            "    forwardTo = ArrayField(JSONField(null=True),blank=True, default=list)\n"
        )
        f.write(
            "    commentByAuthor = models.CharField(max_length = 10000, blank=True)\n"
        )
        f.write(
            "    notification = JSONField(null=True)\n"
        )
        f.write(
            "    userName = models.CharField(max_length=1000, blank=True)\n"
        )
        f.write(
            "    committedAmount = models.PositiveIntegerField(default=0, blank=True)\n"
        )
        f.write(
            "    recommendedAmount = models.PositiveIntegerField(default=0,blank=True)\n"
        )
        f.write(
            "    pipelinedAmount = models.PositiveIntegerField(default=0,blank=True)\n"
        )
        f.write(
            "    expenditureAmount = models.PositiveIntegerField(default=0,blank=True)\n"
        )

        f.write(
            "    userDept = models.CharField(max_length=1000)\n"
        )
        f.close()
        data1 = CreateForms.objects.all()
        for i in data1:
            question1 = str(i.question)
            question1 = question1.replace(" ", "_")
            modelFunc(modelPath, question1, i.inputType, i.questionFields, title)

        CreateForms.objects.all().delete()

        # Writing Admin.py
        f = open(adminPath, 'a')
        f.write("\nadmin.site.register(" + title + ")\n")

        f.write("\nadmin.site.register(" + title + "Accepted)\n")

        f.close()

        # Writing Serializers.py
        f = open(serializerPath, 'a')
        f.write("\n\nclass " + title +
                "Serializer(serializers.ModelSerializer):\n")
        f.write("    class Meta:\n")
        f.write("        model = " + title + "\n")
        f.write("        fields = '__all__'\n")

        f.write("\n\nclass " + title +
                "AcceptedSerializer(serializers.ModelSerializer):\n")
        f.write("    class Meta:\n")
        f.write("        model = " + title + "Accepted\n")
        f.write("        fields = '__all__'\n")

        f.close()

        # Writing Api.py
        f = open(apiPath, 'a')
        f.write("\n\nclass " + title + "ViewSet(viewsets.ModelViewSet):\n")
        f.write("    queryset = " + title + ".objects.all()\n")
        f.write("    parser_class = (MultiPartParser, FormParser)\n")
        f.write("    permission_class = [permissions.AllowAny]\n")
        f.write("    serializer_class = " + title + "Serializer\n")

        f.write("\n\nclass " + title +
                "AcceptedViewSet(viewsets.ModelViewSet):\n")
        f.write("    queryset = " + title + "Accepted.objects.all()\n")
        f.write("    permission_class = [permissions.AllowAny]\n")
        f.write("    serializer_class = " + title + "AcceptedSerializer\n")

        f.close()

        # Writing Urls.py
        f = open(urlPath, 'a')
        f.write("\n\nrouter.register('" + title + "', " + title +
                "ViewSet, '" + title + "')\n")

        f.write("\n\nrouter.register('" + title + "Accepted', " + title +
                "AcceptedViewSet, '" + title + "Accepted')\n")
        f.write("urlpatterns += router.urls\n")

        f.close()

        # Calling Migrations to database
        process = subprocess.Popen(['/home/ubuntu/Documents/nitjforms/nitjforms/nitForms/Server/migrate.sh'])
        process.wait()


def modelFunc(modelPath, question1, inputType, questionFields, title):
    f = open(modelPath, 'a')
    if (inputType == "Short Answer"):
        f.write("    " + question1 + " = models.CharField(max_length=1000)\n")
    elif (inputType == "Paragraph"):
        f.write("    " + question1 + " = models.TextField()\n")
    elif (inputType == "Date"):
        f.write("    " + question1 + " = models.DateField()\n")
    elif (inputType == "File Upload"):
        f.write("    " + question1 + " = models.CharField(max_length=1000)\n")
    elif (inputType == "Date"):
        f.write("    " + question1 + " = models.DateField()\n")
    elif(inputType == "Multiple Choice"):
        print(questionFields)
        f.write("    " + title+question1+"choices = (\n")
        for i in questionFields:
            f.write("        ('" + i + "' , '" + i + "'),\n")    
        f.write("    )\n")        
        f.write("    " + question1 + " = models.CharField(max_length=1000, choices= "+title+question1+"choices)\n")
    elif(inputType == "Dropdown"):
        print(questionFields)
        f.write("    " + title+question1+"choices = (\n")
        for i in questionFields:
            f.write("        ('" + i + "' , '" + i + "'),\n")    
        f.write("    )\n")        
        f.write("    " + question1 + " = models.CharField(max_length=1000, choices= "+title+question1+"choices)\n")
    elif(inputType == "Checkboxes"):
        f.write("    " + title+question1+"choices = (\n")
        for i in questionFields:
            f.write("        ('" + i + "' , '" + i + "'),\n")    
        f.write("    )\n")        
        f.write("    " + question1 + " = ArrayField(models.CharField(max_length=1000, choices= "+title+question1+"choices), default=list, blank=True)\n")
    else:
        pass
    f.close()


@csrf_exempt
def sendMail_views(request):
    mail = EmailIndex.objects.all().last()
    sender1 = mail.senderEmail
    receivers1 = mail.recieverEmail
    message1 = mail.content
    print(sender1, receivers1, message1)
    # creates SMTP session 
    s = smtplib.SMTP('smtp.gmail.com', 587) 
    # start TLS for security 
    s.starttls() 
    sender = "team3852@gmail.com"
    password = "Nitjforms@3852"
    # Authentication 
    s.login(sender, password) 
    # message to be sent 
    message = "Message_you_need_to_send"
    # sending the mail 
    s.sendmail(sender, "raghav.wadhwa.rw@gmail.com", message)    
    # terminating the session 
    s.quit() 
    print("Mail sent successfully")