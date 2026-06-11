from django.urls import path

from .views import (
    ApplyOpportunityView,
    MyApplicationsView,
    ApplicationUpdateView
)
path(
    "update/<int:pk>/",
    ApplicationUpdateView.as_view()
),
urlpatterns = [

    path(
        'apply/',
        ApplyOpportunityView.as_view(),
        name='apply-opportunity'
    ),

    path(
        'tracker/',
        MyApplicationsView.as_view(),
        name='my-applications'
    ),

    path(
        'update/<int:pk>/',
        ApplicationUpdateView.as_view(),
        name='update-application'
    ),

]