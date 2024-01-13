from rest_framework import serializers
from App.models import Student
from App.models import ExampleModel


class Demo(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields="__all__"
        
class Exampleserializer(serializers.ModelSerializer):
    class Meta:
        model = ExampleModel
        fields ="__all__"