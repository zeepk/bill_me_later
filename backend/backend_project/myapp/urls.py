from rest_framework import routers
from .api import (ArticleViewSet)

router = routers.DefaultRouter()
router.register('api/articles', ArticleViewSet, 'articles')


urlpatterns = router.urls