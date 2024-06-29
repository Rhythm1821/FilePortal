from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import File
from .serializers import FileSerializer

class FileViewSet(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = FileSerializer

    def get(self,request):
        files = File.objects.filter(user=self.request.user)
        serializer = FileSerializer(files, many=True)
        return Response(serializer.data)

class FileUploadView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        request.data['user'] = request.user.id
        serializer = FileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print("File saved!")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FileDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return File.objects.get(pk=pk)
        except File.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request,pk, format=None):
        file=self.get_object(pk)
        serializer=FileSerializer(file)
        return Response(serializer.data)
    
    def delete(self, request, pk, format=None):
        file=self.get_object(pk)
        file.delete()
        print("File deleted!")
        return Response(status=status.HTTP_204_NO_CONTENT)