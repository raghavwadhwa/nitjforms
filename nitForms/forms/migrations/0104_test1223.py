# Generated by Django 3.0.5 on 2020-06-26 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0103_test2112'),
    ]

    operations = [
        migrations.CreateModel(
            name='test1223',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hj_name', models.CharField(max_length=100)),
                ('gf_name', models.CharField(max_length=100)),
            ],
        ),
    ]