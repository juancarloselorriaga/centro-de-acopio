<template>
  <v-card>
    <v-card-title>
      Centros de acopio disponibles
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Buscar"
        hint="Puedes buscar por zona, título, víveres, urgencia, etc.."
        single-line
        color = "indigo"
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="centros" :search="search">
      <template v-slot:items="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-center">{{ props.item.flag | flag }}</td>
        <td class="text-xs-center">{{ props.item.type }}</td>
        <td class="text-xs-center">{{ props.item.location }}</td>
        <td class="text-xs-center">{{ props.item.status }}</td>
        <td class="justify-center layout px-0">
          <router-link :to="{name: 'detalle', params: {id: props.item._id}}">
            <v-icon class="mr-2" color="indigo">pageview</v-icon>
          </router-link>
        </td>
      </template>

      <template v-slot:no-results>
        <v-alert
          :value="true"
          color="error"
          icon="warning"
        >La búsqueda de "{{ search }}" no arrojó resultados.</v-alert>
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Título",
          align: "left",
          value: "title"
        },
        { text: "Urgencia", align: "center", value: "flag" },
        { text: "Tipo", align: "center", value: "type" },
        { text: "Ubicación", align: "center", value: "location" },
        { text: "Estatus", align: "center", value: "status" },
        { text: "Acciones", align: "center", value: "actions", sortable: false }
      ],
      centros: [
        {
          _id: 1234567890,
          title: "Inundación grave",
          description: "Se necesitan víveres por fuerte inundación, deslaves en la zona",
          location: "Oaxaca, Oaxaca",
          address: "Pase lo de los Duraznos, no. 133, Col. El Ejido",
          flag: 1,
          type: "Víveres",
          status: 0,
          madeBy: "Yerim Morales",
          victuals: ["arroz", "frijoles"],
          phone_number: "5512345678"
        }
      ]
    };
  },
  methods: {
    getCentros() {

    },
  },
  filters: {
    flag(bandera) {
      if (bandera === 0) {
        return "Normal";
      } else if (bandera === 1) {
        return "Urgente";
      }
      return "Sin información";
    }
  },
    mounted(){
      
  }
};
</script>

