# Generated by Django 2.2.4 on 2019-09-09 05:48

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_auto_20190909_1424'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='subscribe_expire',
            field=models.DateTimeField(default=datetime.datetime(2019, 9, 9, 14, 48, 16, 213294)),
        ),
    ]
