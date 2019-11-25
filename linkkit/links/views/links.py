from rest_framework.response import Response

from linkkit.links.models import Link
from rest_framework import viewsets
from linkkit.links.serializers import LinkSerializer
from django.http import JsonResponse
from rest_framework.decorators import action


class LinkViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows links to be viewed or edited.
    """

    def list(self, request, *args, **kwargs):
        queryset = Link.objects.all()
        serializer_class = LinkSerializer
        return Response(LinkSerializer().data)
