<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
    >
      <div class="d-flex align-center">
      </div>
        <v-btn text :ripple="false"><v-icon left>mdi-arrow-left</v-icon> Orqaga</v-btn>
      <v-spacer></v-spacer>

      <v-btn
        href="https://itsolutions.netlify.app/#/"
        target="_blank"
        text
      >
        <span class="mr-2">Asosiy Menu</span>
        <v-icon>mdi-home-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
      <v-footer padless>
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Blog</strong>
        </v-col>
  </v-footer>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
}
</script>
