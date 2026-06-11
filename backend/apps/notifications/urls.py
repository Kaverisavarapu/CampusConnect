from django.urls import path

from .views import (
    NotificationListView,
    NotificationReadView
)

urlpatterns = [

    path(
        'list/',
        NotificationListView.as_view()
    ),

    path(
        'read/<int:pk>/',
        NotificationReadView.as_view()
    ),
]