# Generated by Django 3.0.5 on 2020-07-03 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0164_auto_20200703_1842'),
    ]

    operations = [
        migrations.CreateModel(
            name='test102',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_mother_name', models.CharField(max_length=1000)),
                ('mother', models.CharField(max_length=1000)),
            ],
        ),
    ]