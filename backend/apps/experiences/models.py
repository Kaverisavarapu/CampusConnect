from django.db import models
from django.conf import settings


class Experience(models.Model):

    TYPE_CHOICES = (
        ('INTERNSHIP', 'Internship'),
        ('JOB', 'Job'),
        ('SCHOLARSHIP', 'Scholarship'),
    )

    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    company_name = models.CharField(
        max_length=255
    )

    role_name = models.CharField(
        max_length=255
    )

    type = models.CharField(
        max_length=20,
        choices=TYPE_CHOICES
    )

    student_year = models.IntegerField()

    experience = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.company_name