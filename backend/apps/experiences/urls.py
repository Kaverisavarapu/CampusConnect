from django.urls import path

from .views import (
    ExperienceCreateView,
    ExperienceListView,
    ExperienceUpdateView,
    ExperienceDeleteView
)

urlpatterns = [

    path(
        'create/',
        ExperienceCreateView.as_view()
    ),

    path(
        'list/',
        ExperienceListView.as_view()
    ),

    path(
        'update/<int:pk>/',
        ExperienceUpdateView.as_view()
    ),

    path(
        'delete/<int:pk>/',
        ExperienceDeleteView.as_view()
    ),
]