from myapp.models import (Article)
from rest_framework import viewsets, permissions
from .serializers import (ArticleSerializer)


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ArticleSerializer