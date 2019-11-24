from linkkit.links.models import Link
from rest_framework import serializers


class LinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Link
        fields = ['link', 'name', 'comment', 'updated_at', 'created_at']


