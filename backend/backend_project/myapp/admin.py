from django.contrib import admin
from .models import (Article)

# Register your models here.
class ArticleAdmin(admin.ModelAdmin):
    field = '__all__'

admin.site.register(Article, ArticleAdmin)
