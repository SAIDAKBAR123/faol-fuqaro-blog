<template>
  <v-app>
    <v-app-bar
      app
      src="https://www.xmple.com/wallpaper/black-blue-gradient-linear-1920x1080-c2-000000-4169e1-a-195-f-14.svg"
      elevate-on-scroll
    >
        <v-btn v-if="false" dark text :ripple="false"><v-icon left>mdi-arrow-left</v-icon> Орқага</v-btn>
      <v-spacer></v-spacer>
       <v-menu
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          rounded
          text
          color="white"
          dark
          v-on="on"
        >
          lang
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in languages"
          :key="i"
          @click="setLocale(item.type)"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      <v-btn
        to="/"
        text
        dark
        rounded
      >
        <span class="mr-2">{{$t('mainBtn')}}</span>
        <v-icon>mdi-home-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <transition name="component-fade" mode="out-in">
      <router-view></router-view>
      </transition>
      <v-footer padless >
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>{{$t('footer')}} <a target="_blank" href="https://itsolutions.netlify.app/#/">itsolutions.uz</a></strong>
        </v-col>
  </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    languages: [
      {
        type: 'en',
        name: 'English'
      },
      {
        type: 'uz',
        name: 'Uzbek'
      },
      {
        type: 'ru',
        name: 'Russian'
      },
      {
        type: 'krill',
        name: 'Ўзбекча'
      }

    ]
    //
  }),
  methods: {
    setLocale (lang) {
      localStorage.setItem('lang', lang)
      this.$i18n.locale = lang
    }
  }
}
</script>
<style scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
