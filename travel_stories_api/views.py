from rest_framework.decorators import api_view
from rest_framework.response import Response
from .settings import (
    JWT_AUTH_COOKIE, JWT_AUTH_REFRESH_COOKIE, JWT_AUTH_SAMESITE,
    JWT_AUTH_SECURE,
)

# Kod lånad av Moments projeket - ska du behålla denna referens eller kan du skippa den?????????????????????
@api_view()
def root_route(request):
    return Response({
        "message": "This is the Travel Stories API. Welcome!"
    })


