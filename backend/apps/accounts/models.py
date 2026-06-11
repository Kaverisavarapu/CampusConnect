from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),
        ('STUDENT', 'Student'),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES
    )

    student_id = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )
    must_change_password = models.BooleanField(
    default=True
)
    branch = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    year = models.PositiveIntegerField(
        blank=True,
        null=True
    )

    profile_photo = models.ImageField(
        upload_to='profiles/',
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.username