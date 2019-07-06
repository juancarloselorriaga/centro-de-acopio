<template>
  <div>

    <blockquote
      class="blockquote subheading pl-1 mb-3 indigo--text text--lighten-1"
    >Esta es una plataforma hecha para solicitar y enviar víveres a centros de acopio dentro de territorio nacional. Podrás asegurar que los víveres que recolectaste lleguen a su destino.</blockquote>
    <TablaCentros />
  </div>

</template>

<script>
import TablaCentros from "@/components/TablaCentros";

export default {
  name: "CentrosDeAcopio",
  components: {
    TablaCentros
  }
};
</script>

