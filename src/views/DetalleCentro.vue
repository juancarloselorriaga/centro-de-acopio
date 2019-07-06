<template>
  <div>
    <TituloDetalle titulo="Detalles del centro de acopio"></TituloDetalle>

    <v-container>
      <v-layout>
        <v-flex xs12>
          <h1 class="indigo--text text--darken-4 text-xs-center mb-5">Inundación grave</h1>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs12>
          <v-layout>
            <v-flex xs4 class="pa-4">
              <v-layout column>
                <span class="indigo--text text--lighten-1 mb-2">Descripción</span>
                <span
                  class="indigo--text text--darken-4 subheading"
                >Inundación grave, se necesitan víveres en el centro de acopio, enviando a zonas cercanas con difícil acceso</span>
              </v-layout>
            </v-flex>

            <v-flex xs4 class="pa-4">
              <v-layout column>
                <span class="indigo--text text--lighten-1 mb-2">Ubicación</span>
                <span class="indigo--text text--darken-4 subheading">Oaxaca, Oaxaca</span>
              </v-layout>
            </v-flex>

            <v-flex xs4 class="pa-4">
              <v-layout column>
                <span class="indigo--text text--lighten-1 mb-2">Dirección</span>
                <span
                  class="indigo--text text--darken-4 subheading"
                >Pase lo de los Duraznos, no. 133, Col. El Ejido</span>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs12>
          <v-layout>
            <v-flex xs4 class="pa-4">
              <v-layout column>
                <span class="indigo--text text--lighten-1 mb-2">Urgencia</span>
                <span class="indigo--text text--darken-4 subheading">Urgente</span>
              </v-layout>
            </v-flex>

            <v-flex xs4 class="pa-4">
              <v-layout column>
                <span class="indigo--text text--lighten-1 mb-2">Tipo</span>
                <span class="indigo--text text--darken-4 subheading">Víveres</span>
              </v-layout>
            </v-flex>

            <v-flex xs4 class="pa-4">
              <v-layout column>
                <span class="indigo--text text--lighten-1 mb-2">Solicitado por</span>
                <span class="indigo--text text--darken-4 subheading">Yerim Morales</span>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex xs12>
          <v-layout>
            <v-flex xs4 class="pa-4">
              <v-layout column>
                <span class="indigo--text text--lighten-1 mb-2">Teléfono de contacto</span>
                <span class="indigo--text text--darken-4 subheading">55-1234-5678</span>
              </v-layout>
            </v-flex>

            <v-flex xs4 class="pa-4">
              <v-layout column>
                <span class="indigo--text text--lighten-1 mb-2">Solicitudes</span>
                <v-flex xs12>
                  <ul>
                    <li
                      v-for="(victual, index) in victuals"
                      :key="index"
                      class="indigo--text text--darken-4 subheading"
                    >{{victual | capitalize}}</li>
                  </ul>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4 class="pa-4">
              <v-layout column>
                <span class="indigo--text text--lighten-1 mb-2">Estado</span>
                <v-chip color="red" text-color="white" class="subheading">Sin atención</v-chip>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TituloDetalle from "@/components/TituloDetalle";

export default {
  props: {
    id: Number
  },
  components: {
    TituloDetalle
  },
  data() {
    return {
      victuals: [
        "arroz",
        "frijoles",
        "cobijas",
        "cubrebocas",
        "botas de lluvia"
      ]
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

