# Generated by Django 2.0.2 on 2020-06-22 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0075_dasdasdad'),
    ]

    operations = [
        migrations.CreateModel(
            name='test3',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Enter_Your_Age', models.CharField(max_length=100)),
                ('enter_your_date_of_birth', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='test4',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('age', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='dasdasdad',
        ),
        migrations.DeleteModel(
            name='Hello',
        ),
        migrations.DeleteModel(
            name='SAFePOPM',
        ),
    ]
