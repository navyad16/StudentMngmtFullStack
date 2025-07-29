from django.shortcuts import render
from rest_framework import viewsets,filters

from django_filters.rest_framework import DjangoFilterBackend
from .models import Student
from .serializers import StudentSerializer

# Create your views here.
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by('id')
    serializer_class = StudentSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['studentClass', 'marks']
    search_fields = ['name']