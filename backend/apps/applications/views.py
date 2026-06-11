from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Application
from .serializers import ApplicationSerializer
from rest_framework.exceptions import ValidationError
from apps.opportunities.models import Opportunity

class ApplyOpportunityView(
    generics.CreateAPIView
):

    queryset = Application.objects.all()

    serializer_class = ApplicationSerializer

    permission_classes = [IsAuthenticated]
   
    def perform_create(self, serializer):

        opportunity = serializer.validated_data[
        'opportunity'
    ]

        if opportunity.is_expired:

            raise ValidationError(
                "Opportunity expired."
            )

        serializer.save(
            student=self.request.user
        )

class MyApplicationsView(
    generics.ListAPIView
):

    serializer_class = ApplicationSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Application.objects.filter(
            student=self.request.user
        ).order_by(
            '-applied_at'
        )
    

class ApplicationUpdateView(
    generics.UpdateAPIView
):

    serializer_class = ApplicationSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Application.objects.filter(
            student=self.request.user
        )