# Generated by Django 2.0.2 on 2020-06-23 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0082_test3'),
    ]

    operations = [
        migrations.CreateModel(
            name='zvczxxcv',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('what_is_your_mother_name', models.CharField(max_length=100)),
                ('what_is_your_father_name', models.CharField(max_length=100)),
            ],
        ),
    ]
