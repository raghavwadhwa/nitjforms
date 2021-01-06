# Generated by Django 3.0.7 on 2021-01-06 18:45

import datetime
import django.contrib.postgres.fields
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.utils.timezone
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0003_test2'),
    ]

    operations = [
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
                ('committedAmount', models.PositiveIntegerField(blank=True, default=0)),
                ('recommendedAmount', models.PositiveIntegerField(blank=True, default=0)),
                ('pipelinedAmount', models.PositiveIntegerField(blank=True, default=0)),
                ('expenditureAmount', models.PositiveIntegerField(blank=True, default=0)),
                ('userDept', models.CharField(max_length=1000)),
                ('what_is_your_name', models.CharField(max_length=1000)),
                ('sasa', models.CharField(max_length=1000)),
            ],
        ),
        migrations.AddField(
            model_name='test2',
            name='sasa',
            field=models.CharField(default=django.utils.timezone.now, max_length=1000),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='test2',
            name='what_is_your_name',
            field=models.CharField(default=datetime.datetime(2021, 1, 6, 18, 45, 42, 458841, tzinfo=utc), max_length=1000),
            preserve_default=False,
        ),
    ]