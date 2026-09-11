from wagtail.models import Page


class HomePage(Page):
    """Portada del sitio."""

    def get_context(self, request):
        context = super().get_context(request)
        # Últimas noticias publicadas (para la sección "Noticias" de la home).
        from noticias.models import NoticiaPage

        context["ultimas_noticias"] = (
            NoticiaPage.objects.live().order_by("-fecha")[:3]
        )
        return context
