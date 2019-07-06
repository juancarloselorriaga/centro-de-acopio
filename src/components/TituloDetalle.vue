<template>
  <div class="detalle-evento__nav">
    <router-link to="/">
      <v-icon light size="32" class="mr-5" color="indigo darken-4">chevron_left</v-icon>
    </router-link>
    <span class="indigo--text text--darken-4 display-1">{{titulo}}</span>
    <v-spacer></v-spacer>
    
    <v-btn color="indigo" dark>Atender solicitud</v-btn>
  </div>
</template>

<script>
export default {
  name: 'TituloDetalle',
  props: {
    titulo: String
  }
}
</script>

<style scoped>
.detalle-evento__nav{
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}
</style>