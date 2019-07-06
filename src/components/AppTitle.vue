<template>
  <v-layout column justify-center class>
    <v-flex xs6>
      <img src="@/assets/fratellia_logo.svg" :alt="titulo" width="500" />
    </v-flex>
    <v-flex xs6>
      <v-card height="100%" class="py-0" flat>
        <v-subheader class="headline pl-1 mb-0 indigo--text text--lighten-1 indigo lighten-5">
          Actualmente existen &nbsp;
          <strong>{{contador}} centros de acopio activos.</strong>
        </v-subheader>
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

