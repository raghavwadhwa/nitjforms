# Generated by Django 3.0.7 on 2020-06-16 21:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0044_auto_20200613_2053'),
    ]

    operations = [
        migrations.CreateModel(
            name='asasa',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='chahahattt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='jatin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='test1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_name', models.CharField(max_length=100)),
            ],
        ),
    ]