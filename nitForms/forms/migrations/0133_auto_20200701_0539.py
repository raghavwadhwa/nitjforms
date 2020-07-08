# Generated by Django 3.0.5 on 2020-07-01 00:09

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0132_test2'),
    ]

    operations = [
        migrations.DeleteModel(
            name='test1',
        ),
        migrations.DeleteModel(
            name='test2',
        ),
        migrations.AddField(
            model_name='formname',
            name='created_by',
            field=models.CharField(default=datetime.datetime(2020, 7, 1, 0, 9, 5, 442277, tzinfo=utc), max_length=100),
            preserve_default=False,
        ),
    ]