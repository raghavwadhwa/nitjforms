# Generated by Django 3.0.5 on 2020-06-27 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0113_auto_20200627_1631'),
    ]

    operations = [
        migrations.CreateModel(
            name='test1022',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_sdaasdas', models.CharField(max_length=100)),
                ('father', models.CharField(max_length=100)),
            ],
        ),
    ]