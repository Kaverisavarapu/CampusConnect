from rest_framework import serializers

from .models import (
    Opportunity,
    SavedOpportunity
)


class OpportunitySerializer(
    serializers.ModelSerializer
):

    class Meta:

        model = Opportunity

        fields = '__all__'

        read_only_fields = (
            'created_by',
            'created_at',
            'updated_at',
            'is_expired'
        )


class SavedOpportunitySerializer(
    serializers.ModelSerializer
):

    title = serializers.CharField(
        source='opportunity.title',
        read_only=True
    )

    company = serializers.CharField(
        source='opportunity.company',
        read_only=True
    )

    deadline = serializers.DateField(
        source='opportunity.deadline',
        read_only=True
    )

    class Meta:

        model = SavedOpportunity

        fields = '__all__'

        read_only_fields = (
            'student',
            'saved_at'
        )