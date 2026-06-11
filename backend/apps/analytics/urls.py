from django.urls import path

from .views import (
    OpportunityAnalyticsView,
    OpportunitiesByYearView,
    DashboardSummaryView
)

urlpatterns = [

    path(
        'summary/',
        DashboardSummaryView.as_view()
    ),

    path(
        'opportunity/<int:pk>/',
        OpportunityAnalyticsView.as_view()
    ),

    path(
        'year/<int:year>/',
        OpportunitiesByYearView.as_view()
    ),

]