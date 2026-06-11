from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from apps.accounts.permissions import IsAdmin
from apps.opportunities.models import Opportunity
from apps.applications.models import Application


class OpportunityAnalyticsView(
    APIView
):

    permission_classes = [
        IsAuthenticated,
        IsAdmin
    ]

    def get(
        self,
        request,
        pk
    ):

        opportunity = Opportunity.objects.get(
            id=pk
        )

        applications = Application.objects.filter(
            opportunity=opportunity
        )

        applied = applications.filter(
            status="APPLIED"
        ).count()

        shortlisted = applications.filter(
            status="SHORTLISTED"
        ).count()

        selected = applications.filter(
            status="SELECTED"
        ).count()

        rejected = applications.filter(
            status="REJECTED"
        ).count()

        return Response({

            "opportunity":
                opportunity.title,

            "applied":
                applied,

            "shortlisted":
                shortlisted,

            "selected":
                selected,

            "rejected":
                rejected,

            "students": [

                {
                    "student_id":
                        app.student.student_id,

                    "username":
                        app.student.username,

                    "branch":
                        app.student.branch,

                    "year":
                        app.student.year,

                    "status":
                        app.status
                }

                for app in applications

            ]

        })
class OpportunitiesByYearView(
    APIView
):

    permission_classes = [
        IsAuthenticated,
        IsAdmin
    ]

    def get(
        self,
        request,
        year
    ):

        opportunities = Opportunity.objects.filter(
            eligibility_years__contains=[year]
        )

        data = [

            {
                "id": item.id,
                "title": item.title,
                "company": item.company
            }

            for item in opportunities

        ]

        return Response(data)
class DashboardSummaryView(
    APIView
):

    permission_classes = [
        IsAuthenticated,
        IsAdmin
    ]

    def get(
        self,
        request
    ):

        total_opportunities = (
            Opportunity.objects.count()
        )

        total_applications = (
            Application.objects.count()
        )

        applied = (
            Application.objects.filter(
                status="APPLIED"
            ).count()
        )

        shortlisted = (
            Application.objects.filter(
                status="SHORTLISTED"
            ).count()
        )

        selected = (
            Application.objects.filter(
                status="SELECTED"
            ).count()
        )

        rejected = (
            Application.objects.filter(
                status="REJECTED"
            ).count()
        )

        return Response({

            "opportunities":
                total_opportunities,

            "applications":
                total_applications,

            "applied":
                applied,

            "shortlisted":
                shortlisted,

            "selected":
                selected,

            "rejected":
                rejected

        })
