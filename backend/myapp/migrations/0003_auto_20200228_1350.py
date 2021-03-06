# Generated by Django 3.0.3 on 2020-02-28 21:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_auto_20200119_1846'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('type', models.CharField(choices=[('MO', 'Monthly'), ('WE', 'Weekly')], default='MO', max_length=2)),
                ('start_date', models.DateTimeField()),
            ],
        ),
        migrations.DeleteModel(
            name='Article',
        ),
    ]
