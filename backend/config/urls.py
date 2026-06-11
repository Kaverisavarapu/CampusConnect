from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [

    path('admin/', admin.site.urls),

    path(
        'api/accounts/',
        include('apps.accounts.urls')
    ),

    path(
        'api/opportunities/',
        include('apps.opportunities.urls')
    ),

    path(
        'api/token/',
        TokenObtainPairView.as_view()
    ),

    path(
        'api/token/refresh/',
        TokenRefreshView.as_view()
    ),
    path(
    'api/applications/',
    include('apps.applications.urls')
),
path(
    'api/experiences/',
    include('apps.experiences.urls')
),
path(
    'api/notifications/',
    include('apps.notifications.urls')
),
path(
    'api/analytics/',
    include('apps.analytics.urls')
),
]