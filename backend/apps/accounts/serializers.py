from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User

        fields = [
            'id',
            'username',
            'email',
            'role',
            'student_id',
            'branch',
            'year',
            'profile_photo',
            'must_change_password'
        ]


class LoginSerializer(serializers.Serializer):

    username = serializers.CharField()

    password = serializers.CharField()