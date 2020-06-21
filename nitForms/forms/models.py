from django.db import models
from django.contrib.auth.models import User


class CreateForms(models.Model):
    question = models.CharField(max_length=100, blank=False)
    inputType = models.CharField(max_length=50, blank=False)
    owner = models.ForeignKey(
        User, related_name="createForm", on_delete=models.CASCADE, null=True
    )

    def __str__(self):
        return self.question


class FormName(models.Model):
    title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=100)
    owner = models.ForeignKey(
        User, related_name="formName", on_delete=models.CASCADE, null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title



class Hello(models.Model):
    ascxda = models.CharField(max_length=100)
    vzcxcxzvccxv = models.CharField(max_length=100)
    cvzxcvzxv = models.TextField()


class SAFePOPM(models.Model):
    ascxda = models.CharField(max_length=100)
    vzcxcxzvccxv = models.CharField(max_length=100)
    cvzxcvzxv = models.TextField()
    Enter_Your_Age = models.CharField(max_length=100)


class dasdasdad(models.Model):
    Enter_Your_Age = models.CharField(max_length=100)
    enter_your_date_of_birth = models.CharField(max_length=100)
