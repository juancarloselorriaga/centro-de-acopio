<template>
  <v-app>
    <Navbar />
    <v-content>
      <v-container fluid fill-height class="white lighten-5">
        <v-layout row>
          <v-flex xs12>
            <AppTitle class="mb-3" titulo="Fraternidad para desastres" :contador="3"></AppTitle>
            <div class="white rounded-card pa-4">
              <transition name="fade" mode="out-in">
                <router-view />
              </transition>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import AppTitle from "./components/AppTitle";

export default {
  name: "App",
  components: {
    Navbar,
    AppTitle
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.rounded-card {
  border-radius: 11px;
}

a{
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

