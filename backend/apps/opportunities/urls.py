from django.urls import path

from .views import (
    OpportunityCreateView,
    OpportunityListView,
    OpportunityUpdateView,
    OpportunityDeleteView,
    SaveOpportunityView,
    SavedOpportunityListView,
    RemoveSavedOpportunityView
)

urlpatterns = [

    path(
        'create/',
        OpportunityCreateView.as_view(),
        name='create-opportunity'
    ),

    path(
        'list/',
        OpportunityListView.as_view(),
        name='list-opportunities'
    ),

    path(
        'update/<int:pk>/',
        OpportunityUpdateView.as_view(),
        name='update-opportunity'
    ),

    path(
        'delete/<int:pk>/',
        OpportunityDeleteView.as_view(),
        name='delete-opportunity'
    ),
    path(
    'save/',
    SaveOpportunityView.as_view()
),

path(
    'saved/',
    SavedOpportunityListView.as_view()
),

path(
    'saved/delete/<int:pk>/',
    RemoveSavedOpportunityView.as_view()
),
]