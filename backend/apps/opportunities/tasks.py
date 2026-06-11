from celery import shared_task

from datetime import date

from .models import Opportunity
from datetime import timedelta

from apps.accounts.models import User
from apps.notifications.models import Notification
from django.core.mail import send_mail
@shared_task
def expire_opportunities():

    expired_count = Opportunity.objects.filter(
        deadline__lt=date.today(),
        is_expired=False
    ).update(
        is_expired=True
    )

    return f"{expired_count} opportunities expired"

@shared_task
def send_deadline_reminders():

    target_date = (
        date.today() + timedelta(days=2)
    )

    opportunities = Opportunity.objects.filter(
        deadline=target_date,
        is_expired=False
    )

    for opportunity in opportunities:

        students = User.objects.filter(
            role='STUDENT',
            year__in=opportunity.eligibility_years
        )

        for student in students:

            Notification.objects.create(

                student=student,

                title='Deadline Reminder',

                message=(
                    f'{opportunity.title} closes in 2 days.'
                )
            )

    return "Deadline reminders created"

@shared_task
def send_deadline_emails():

    target_date = (
        date.today() + timedelta(days=2)
    )

    opportunities = Opportunity.objects.filter(
        deadline=target_date,
        is_expired=False
    )

    for opportunity in opportunities:

        students = User.objects.filter(
            role='STUDENT',
            year__in=opportunity.eligibility_years
        )

        for student in students:

            if student.email:

                send_mail(

                    subject='Opportunity Deadline Reminder',

                    message=(
                        f'Hello {student.username},\n\n'
                        f'The opportunity '
                        f'"{opportunity.title}" '
                        f'will expire in 2 days.\n\n'
                        f'Apply before the deadline.'
                    ),

                    from_email='noreply@careerconnect.com',

                    recipient_list=[
                        student.email
                    ],

                    fail_silently=False
                )

    return "Emails sent successfully"