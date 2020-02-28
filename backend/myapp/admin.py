from django.contrib import admin
from .models import (Event)

# Register your models here.
class EventAdmin(admin.ModelAdmin):
    field = '__all__'

admin.site.register(Event, EventAdmin)
