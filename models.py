from django.db import models

class Student(models.Model):
    
    
    stu_name = models.CharField(max_length=40)
    stu_dob = models.DateField()
    def __str__(self):
        return self.stu_name,
    
class ExampleModel(models.Model):

    name = models.CharField(max_length=100)
    description = models.TextField()
    def _str_(self):
        return self.name,


