# Generated by Django 3.0.5 on 2020-07-09 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0202_auto_20200709_1737'),
    ]

    operations = [
        migrations.CreateModel(
            name='test2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Enter_Your_Age', models.CharField(max_length=1000)),
                ('cxzc', models.CharField(max_length=1000)),
                ('enter_your_date_of_birth', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='test2Accepted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(blank=True, max_length=1000)),
                ('Enter_Your_Age', models.CharField(max_length=1000)),
                ('cxzc', models.CharField(max_length=1000)),
                ('enter_your_date_of_birth', models.CharField(max_length=1000)),
            ],
        ),
    ]
