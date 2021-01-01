# Generated by Django 3.0.7 on 2020-12-30 16:04

import django.contrib.postgres.fields
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0008_auto_20201230_2130'),
    ]

    operations = [
        migrations.CreateModel(
            name='test1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('responseID', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('responseTime', models.DateTimeField(auto_now_add=True)),
                ('responseStatus', models.BooleanField(default=False)),
                ('userName', models.CharField(blank=True, max_length=1000)),
                ('userMail', models.EmailField(max_length=1000)),
                ('userDept', models.CharField(max_length=1000)),
                ('what_is_your_name', models.CharField(max_length=1000)),
                ('sasasa', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='test1Accepted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('acceptedResponseID', models.CharField(max_length=1000)),
                ('responseTime', models.DateTimeField(auto_now_add=True)),
                ('comment', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('forwardTo', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.jsonb.JSONField(null=True), blank=True, default=list, size=None)),
                ('commentByAuthor', models.CharField(blank=True, max_length=10000)),
                ('notification', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('userName', models.CharField(blank=True, max_length=1000)),
                ('committedAmount', models.PositiveIntegerField(blank=True, default=0)),
                ('recommendedAmount', models.PositiveIntegerField(blank=True, default=0)),
                ('pipelinedAmount', models.PositiveIntegerField(blank=True, default=0)),
                ('expenditureAmount', models.PositiveIntegerField(blank=True, default=0)),
                ('userDept', models.CharField(max_length=1000)),
                ('what_is_your_name', models.CharField(max_length=1000)),
                ('sasasa', models.CharField(max_length=1000)),
            ],
        ),
    ]