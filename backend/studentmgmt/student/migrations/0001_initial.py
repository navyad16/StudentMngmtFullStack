# Generated by Django 5.2.4 on 2025-07-29 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('studentClass', models.CharField(max_length=10)),
                ('marks', models.IntegerField()),
            ],
        ),
    ]
