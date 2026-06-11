from rest_framework import serializers
from .models import Experience


class ExperienceSerializer(
    serializers.ModelSerializer
):

    student_name = serializers.CharField(
        source='student.username',
        read_only=True
    )

    class Meta:

        model = Experience

        fields = '__all__'

        read_only_fields = [
            'student',
            'created_at'
        ]