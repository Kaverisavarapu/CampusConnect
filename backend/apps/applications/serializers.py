from rest_framework import serializers
from .models import Application


from rest_framework import serializers
from .models import Application


class ApplicationSerializer(
    serializers.ModelSerializer
):

    opportunity_title = serializers.CharField(
        source='opportunity.title',
        read_only=True
    )

    company = serializers.CharField(
        source='opportunity.company',
        read_only=True
    )

    class Meta:

        model = Application

        fields = [
            'id',
            'student',
            'opportunity',
            'opportunity_title',
            'company',
            'status',
            'applied_at'
        ]

        read_only_fields = [
            'student',
            'applied_at'
        ]