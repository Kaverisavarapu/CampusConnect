from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings

from apps.opportunities.models import Opportunity


class Application(models.Model):

    STATUS_CHOICES = (
    ('APPLIED', 'Applied'),
    ('IN_PROGRESS', 'In Progress'),
    ('SHORTLISTED', 'Shortlisted'),
    ('REJECTED', 'Rejected'),
    ('SELECTED', 'Selected'),
)

    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    opportunity = models.ForeignKey(
        Opportunity,
        on_delete=models.CASCADE
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='APPLIED'
    )

    applied_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        unique_together = (
            'student',
            'opportunity'
        )

    def __str__(self):
        return f"{self.student.username} - {self.opportunity.title}"