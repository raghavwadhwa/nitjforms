# Generated by Django 3.0.5 on 2020-06-21 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0070_hello1'),
    ]

    operations = [
        migrations.CreateModel(
            name='SAFdsePOPM',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('acacac', models.CharField(max_length=100)),
                ('cxzc', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='Hello1',
        ),
    ]
