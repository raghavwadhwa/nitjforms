# Generated by Django 3.0.5 on 2020-06-21 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0073_hello'),
    ]

    operations = [
        migrations.CreateModel(
            name='SAFePOPM',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ascxda', models.CharField(max_length=100)),
                ('vzcxcxzvccxv', models.CharField(max_length=100)),
                ('cvzxcvzxv', models.TextField()),
                ('Enter_Your_Age', models.CharField(max_length=100)),
            ],
        ),
    ]
