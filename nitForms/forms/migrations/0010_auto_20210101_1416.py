# Generated by Django 3.0.1 on 2021-01-01 08:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0009_test1_test1accepted'),
    ]

    operations = [
        migrations.DeleteModel(
            name='test1',
        ),
        migrations.DeleteModel(
            name='test1Accepted',
        ),
    ]