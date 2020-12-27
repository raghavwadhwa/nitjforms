# Generated by Django 3.0.5 on 2020-12-19 13:58

import django.contrib.postgres.fields
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0018_test1_test1accepted'),
    ]

    operations = [
        migrations.CreateModel(
            name='test2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('responseID', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('responseTime', models.DateTimeField(auto_now_add=True)),
                ('responseStatus', models.BooleanField(default=False)),
                ('userName', models.CharField(blank=True, max_length=1000)),
                ('userMail', models.EmailField(max_length=1000)),
                ('sister_name', models.CharField(max_length=1000)),
                ('your_name', models.TextField()),
                ('what_is_your_mother_name', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='test2Accepted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('acceptedResponseID', models.CharField(max_length=1000)),
                ('responseTime', models.DateTimeField(auto_now_add=True)),
                ('comment', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('forwardTo', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.jsonb.JSONField(null=True), blank=True, default=list, size=None)),
                ('commentByAuthor', models.CharField(blank=True, max_length=10000)),
                ('notification', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('userName', models.CharField(blank=True, max_length=1000)),
                ('sister_name', models.CharField(max_length=1000)),
                ('your_name', models.TextField()),
                ('what_is_your_mother_name', models.CharField(max_length=1000)),
            ],
        ),
    ]
