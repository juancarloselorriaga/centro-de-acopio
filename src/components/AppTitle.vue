<template>
  <v-layout column justify-center class>
    <v-flex xs6>
      <img src="@/assets/fratellia_logo.svg" :alt="titulo" width="280" />
    </v-flex>
    <v-flex xs6>
      <v-card height="100%" class="py-0" flat>
        <v-subheader class="headline pl-1 mb-0 indigo--text text--lighten-1 white">
          Actualmente existen &nbsp;
          <strong>{{contador}} centros de acopio activos.</strong>
        </v-subheader>
        <blockquote
      class="blockquote subheading pl-1 mb-3 indigo--text text--lighten-1"
    >Esta es una plataforma hecha para solicitar y enviar víveres a centros de acopio dentro de territorio nacional. Podrás asegurar que los víveres que recolectaste lleguen a su destino.</blockquote>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
var moment = require("moment");
moment.locale("es");

export default {
  name: "AppTitle",
  props: {
    titulo: String,
    contador: Number
  }
};
</script>

