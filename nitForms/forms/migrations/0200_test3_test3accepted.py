# Generated by Django 3.0.7 on 2020-07-08 23:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0199_test2_test2accepted'),
    ]

    operations = [
        migrations.CreateModel(
            name='test3',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_name', models.CharField(max_length=1000)),
                ('occupation', models.CharField(max_length=1000)),
                ('father_name', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='test3Accepted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_name', models.CharField(max_length=1000)),
                ('occupation', models.CharField(max_length=1000)),
                ('father_name', models.CharField(max_length=1000)),
            ],
        ),
    ]
