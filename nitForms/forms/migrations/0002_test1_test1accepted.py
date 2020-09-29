# Generated by Django 3.0.5 on 2020-09-27 14:30

import django.contrib.postgres.fields
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='test1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('responseTime', models.DateTimeField(auto_now_add=True)),
                ('formStatus', models.BooleanField(default=False)),
                ('commentRejected', models.CharField(blank=True, max_length=1000)),
                ('userName', models.CharField(blank=True, max_length=1000)),
                ('Enter_Your_Age', models.CharField(max_length=1000)),
                ('enter_your_date_of_birth', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='test1Accepted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('responseTime', models.DateTimeField(auto_now_add=True)),
                ('comment', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('forwardTo', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.jsonb.JSONField(null=True), blank=True, default=list, size=None)),
                ('commentAccepted', models.CharField(blank=True, max_length=1000)),
                ('notification', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=1000), blank=True, default=list, size=None)),
                ('userName', models.CharField(blank=True, max_length=1000)),
                ('Enter_Your_Age', models.CharField(max_length=1000)),
                ('enter_your_date_of_birth', models.CharField(max_length=1000)),
            ],
        ),
    ]
