from django.db import models
from django.conf import settings


class Opportunity(models.Model):

    TYPE_CHOICES = (
        ('INTERNSHIP', 'Internship'),
        ('JOB', 'Job'),
        ('SCHOLARSHIP', 'Scholarship'),
    )

    title = models.CharField(max_length=255)

    company = models.CharField(max_length=255)

    description = models.TextField()

    type = models.CharField(
        max_length=20,
        choices=TYPE_CHOICES
    )

    eligibility_years = models.JSONField()

    deadline = models.DateField()

    application_link = models.URLField()

    is_expired = models.BooleanField(
        default=False
    )

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.title
    

class SavedOpportunity(models.Model):

    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    opportunity = models.ForeignKey(
        Opportunity,
        on_delete=models.CASCADE
    )

    saved_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        unique_together = (
            'student',
            'opportunity'
        )

    def __str__(self):
        return f"{self.student.username} saved {self.opportunity.title}"