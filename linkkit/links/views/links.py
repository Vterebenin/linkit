from linkkit.links.models import Link
from rest_framework import viewsets
from linkkit.links.serializers import LinkSerializer


class LinkViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows links to be viewed or edited.
    """
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
