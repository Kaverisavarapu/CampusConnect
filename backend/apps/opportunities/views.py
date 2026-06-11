from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from apps.accounts.permissions import IsAdmin
from apps.accounts.models import User
from apps.notifications.models import Notification
from .models import (
    Opportunity,
    SavedOpportunity
)

from .serializers import (
    OpportunitySerializer,
    SavedOpportunitySerializer
)
from django.core.mail import send_mail
class OpportunityCreateView(
    generics.CreateAPIView
):

    queryset = Opportunity.objects.all()

    serializer_class = OpportunitySerializer

    permission_classes = [IsAdmin]

    def perform_create(self, serializer):

        opportunity = serializer.save(
            created_by=self.request.user
        )

        print(
            "Opportunity Created:",
            opportunity.title
        )

        print(
            "Eligibility:",
            opportunity.eligibility_years
        )

        eligible_students = User.objects.filter(
            role='STUDENT',
            year__in=opportunity.eligibility_years
        )

        print(
            "Eligible Students:",
            list(eligible_students)
        )

        for student in eligible_students:

            Notification.objects.create(

                student=student,

                title="New Opportunity Posted",

                message=
                f"{opportunity.title} has been posted."

            )

            if student.email:

                send_mail(

                    subject=
                    "New Opportunity Posted - CampusConnect",

                    message=f"""
        Hello {student.username},

        A new opportunity matching your eligibility has been posted.

        Title:
        {opportunity.title}

        Company:
        {opportunity.company}

        Type:
        {opportunity.type}

        Deadline:
        {opportunity.deadline}

        Please login to CampusConnect to view complete details and apply.

        Regards,
        Placement Cell
        CampusConnect
                    """,

                    from_email=None,

                    recipient_list=[
                        student.email
                    ],

                    fail_silently=False

                )

class OpportunityListView(
    generics.ListAPIView
):

    serializer_class = OpportunitySerializer

    def get_queryset(self):

        user = self.request.user

        if not user.is_authenticated:
            return Opportunity.objects.none()

        if user.role == "ADMIN":
            return Opportunity.objects.all().order_by(
                '-created_at'
            )

        return Opportunity.objects.filter(
            eligibility_years__contains=[user.year]
        ).order_by(
            '-created_at'
        )
class OpportunityUpdateView(
    generics.UpdateAPIView
):

    queryset = Opportunity.objects.all()

    serializer_class = OpportunitySerializer

    permission_classes = [IsAdmin]

class OpportunityDeleteView(
    generics.DestroyAPIView
):

    queryset = Opportunity.objects.all()

    serializer_class = OpportunitySerializer

    permission_classes = [IsAdmin]


class SaveOpportunityView(
    generics.CreateAPIView
):

    serializer_class = SavedOpportunitySerializer

    permission_classes = [IsAuthenticated]

    def perform_create(
        self,
        serializer
    ):

        serializer.save(
            student=self.request.user
        )

class SavedOpportunityListView(
    generics.ListAPIView
):

    serializer_class = SavedOpportunitySerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return SavedOpportunity.objects.filter(
            student=self.request.user
        ).order_by(
            '-saved_at'
        )
class RemoveSavedOpportunityView(
    generics.DestroyAPIView
):

    serializer_class = SavedOpportunitySerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return SavedOpportunity.objects.filter(
            student=self.request.user
        )