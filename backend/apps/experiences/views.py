from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Experience
from .serializers import ExperienceSerializer

class ExperienceCreateView(
    generics.CreateAPIView
):

    serializer_class = ExperienceSerializer

    permission_classes = [IsAuthenticated]

    def perform_create(
        self,
        serializer
    ):

        serializer.save(
            student=self.request.user
        )

class ExperienceListView(
    generics.ListAPIView
):

    serializer_class = ExperienceSerializer

    queryset = Experience.objects.all().order_by(
        '-created_at'
    )

class ExperienceUpdateView(
    generics.UpdateAPIView
):

    serializer_class = ExperienceSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Experience.objects.filter(
            student=self.request.user
        )
    
class ExperienceDeleteView(
    generics.DestroyAPIView
):

    serializer_class = ExperienceSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Experience.objects.filter(
            student=self.request.user
        )
    

