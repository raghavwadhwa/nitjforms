# Generated by Django 2.0.2 on 2020-06-26 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0097_test2'),
    ]

    operations = [
        migrations.CreateModel(
            name='test3',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mother', models.CharField(max_length=100)),
                ('sister_name', models.CharField(max_length=100)),
                ('fields', models.CharField(max_length=100)),
                ('brother_name', models.CharField(max_length=100)),
            ],
        ),
    ]
