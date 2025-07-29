from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    studentClass = models.CharField(max_length=10)
    marks = models.IntegerField()

    def __str__(self):
        return self.name