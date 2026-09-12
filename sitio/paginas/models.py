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


class InstitucionalPage(Page):
    """Página Institucional: Quiénes somos, Comisión Directiva y Estatuto.

    El contenido (comisión, estatuto) se mantiene en el template por ser
    institucional/legal y de cambio poco frecuente.
    """

    parent_page_types = ["home.HomePage"]
    subpage_types = []
    max_count = 1

    class Meta:
        verbose_name = "Página Institucional"


class BeneficiosPage(Page):
    """Página de Beneficios: categorías + grilla de beneficios y convenios."""

    parent_page_types = ["home.HomePage"]
    subpage_types = []
    max_count = 1

    class Meta:
        verbose_name = "Página de Beneficios"


class CapacitacionPage(Page):
    """Página de Capacitación: intro + grilla de convenios educativos y becas."""

    parent_page_types = ["home.HomePage"]
    subpage_types = []
    max_count = 1

    class Meta:
        verbose_name = "Página de Capacitación"
