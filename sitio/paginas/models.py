from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField
from wagtail.models import Page


class TurismoPage(Page):
    """Página de Turismo: intro editable + grilla de destinos + mapa de hoteles."""

    intro = RichTextField(
        blank=True,
        verbose_name="Introducción",
        help_text="Texto de presentación que aparece arriba de los destinos.",
    )

    content_panels = Page.content_panels + [
        FieldPanel("intro"),
    ]

    parent_page_types = ["home.HomePage"]
    subpage_types = []
    max_count = 1

    class Meta:
        verbose_name = "Página de Turismo"
