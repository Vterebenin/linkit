import uuid
from django.db import models


class Link(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    link = models.URLField(null=False, max_length=255)
    name = models.CharField(null=False, max_length=255)
    comment = models.CharField(null=False, max_length=255)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
