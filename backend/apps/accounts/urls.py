from django.urls import path

from .views import (
    LoginView,
    CurrentUserView,
    ChangePasswordView,
    ProfileUpdateView
)

urlpatterns = [

    path(
        'login/',
        LoginView.as_view(),
        name='login'
    ),

    path(
        'me/',
        CurrentUserView.as_view()
    ),

    path(
        'change-password/',
        ChangePasswordView.as_view()
    ),
path(
    "profile/update/",
    ProfileUpdateView.as_view()
),
]