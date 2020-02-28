from django.db import models


class Event(models.Model):
    EVENT_TYPES = (
        ('MO', 'Monthly'),
        ('WE', 'Weekly'),
    )
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=2, choices=EVENT_TYPES, default='MO',)
    start_date = models.DateField()

