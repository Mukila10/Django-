from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from App.models import Student
from App.models import ExampleModel
from App.Serializers import Exampleserializer
from App.Serializers import Demo
from rest_framework import status


@api_view(['GET' ,'POST'])
def xyz(request):
    if request.method == 'GET':
        x = Student.objects.all()
        Serializers = Demo(x,many=True)
        return Response(Serializers.data)
    elif request.method == 'POST':
        Serializers = Demo(data=request.data)
        if Serializers.is_valid():
            Serializers.save()
            return Response(Serializers.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def snippet_detail(request, pk):
    try:
        x = Student.objects.get(pk=pk)
    except x.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = Demo(x)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = Demo(x, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Demo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET' ,'POST'])
def function2(request):
    if request.method == 'GET':
        x = ExampleModel.objects.all()
        Serializers = Exampleserializer(x,many=True)
        return Response(Serializers.data)
    elif request.method == 'POST':
        Serializers = Exampleserializer(data=request.data)
        if Serializers.is_valid():
            Serializers.save()
            return Response(Serializers.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def example_detail(request, pk):
    try:
        example = ExampleModel.objects.get(pk=pk)
    except ExampleModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = Exampleserializer(example)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = Exampleserializer(example, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        example.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

