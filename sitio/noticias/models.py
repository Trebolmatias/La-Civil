from django.core.paginator import Paginator
from django.db import models

from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField
from wagtail.models import Page
from wagtail.search import index


class NoticiaIndexPage(Page):
    """Índice de noticias: lista las noticias hijas, paginadas."""

    intro = RichTextField(
        blank=True,
        verbose_name="Introducción",
        help_text="Texto breve opcional que aparece arriba del listado.",
    )

    content_panels = Page.content_panels + [
        FieldPanel("intro"),
    ]

    # Solo se pueden crear Noticias debajo del índice.
    subpage_types = ["noticias.NoticiaPage"]
    max_count = 1  # un único índice de noticias en el sitio

    class Meta:
        verbose_name = "Índice de noticias"

    def get_context(self, request):
        context = super().get_context(request)
        noticias = (
            NoticiaPage.objects.child_of(self).live().order_by("-fecha")
        )
        paginator = Paginator(noticias, 9)  # 9 por página (grilla de 3x3)
        page = request.GET.get("page")
        context["noticias"] = paginator.get_page(page)
        return context


class NoticiaPage(Page):
    """Una noticia / novedad de la Asociación."""

    CATEGORIAS = [
        ("institucional", "Institucional"),
        ("beneficios", "Beneficios"),
        ("gremiales", "Gremiales"),
        ("comunidad", "Comunidad / Efemérides"),
    ]

    fecha = models.DateField("Fecha de publicación")
    categoria = models.CharField(
        "Categoría", max_length=20, choices=CATEGORIAS, default="institucional"
    )
    copete = models.CharField(
        "Copete",
        max_length=300,
        blank=True,
        help_text="Resumen breve que aparece en el listado y en los buscadores.",
    )
    imagen = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
        verbose_name="Imagen destacada",
    )
    body = RichTextField(blank=True, verbose_name="Cuerpo")

    content_panels = Page.content_panels + [
        FieldPanel("fecha"),
        FieldPanel("categoria"),
        FieldPanel("imagen"),
        FieldPanel("copete"),
        FieldPanel("body"),
    ]

    search_fields = Page.search_fields + [
        index.SearchField("copete"),
        index.SearchField("body"),
    ]

    parent_page_types = ["noticias.NoticiaIndexPage"]
    subpage_types = []

    class Meta:
        verbose_name = "Noticia"
        verbose_name_plural = "Noticias"
