# Generated by Django 3.0.5 on 2020-06-30 23:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0129_auto_20200701_0437'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='formname',
            name='owner',
        ),
    ]