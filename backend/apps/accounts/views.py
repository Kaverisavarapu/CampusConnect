from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer
from rest_framework.generics import UpdateAPIView
from .models import User
from .serializers import UserSerializer

class LoginView(APIView):

    def post(self, request):

        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(
            username=username,
            password=password
        )

        if not user:

            return Response(

                {
                    "error":
                    "Invalid Credentials"
                },

                status=status.HTTP_401_UNAUTHORIZED

            )

        serializer = UserSerializer(user)

        return Response(
            serializer.data
        )


class CurrentUserView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        serializer = UserSerializer(
            request.user
        )

        return Response(
            serializer.data
        )


class ChangePasswordView(
    APIView
):

    permission_classes = [
        IsAuthenticated
    ]

    def post(
        self,
        request
    ):

        old_password = request.data.get(
            "old_password"
        )

        new_password = request.data.get(
            "new_password"
        )

        if not request.user.check_password(
            old_password
        ):

            return Response(

                {
                    "error":
                    "Current password incorrect"
                },

                status=400

            )

        validate_password(
            new_password
        )

        request.user.set_password(
    new_password
)

        request.user.must_change_password = False

        request.user.save()

        return Response({

            "message":
            "Password Updated"

        })
class ProfileUpdateView(
    UpdateAPIView
):

    serializer_class = UserSerializer

    permission_classes = [
        IsAuthenticated
    ]

    def get_object(self):

        return self.request.user