<template>
  <div>
    <v-container class="px-9">
       <v-row justify="center">
          <v-col cols="12" md="10" lg="10" xl="7">
             <v-breadcrumbs :items="routes"></v-breadcrumbs>
          </v-col>
        </v-row>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="10" xl="7">
          <v-card elevation="0">
            <v-card-subtitle>
                <v-row class="py-0">
                  <v-col class="py-0" cols="auto">
                       <p class="header-text pb-3" >{{title}}</p>
                  </v-col>
                </v-row>
                <v-row class="py-0">
                   <v-col cols="auto">
                    <v-row align="center" class="py-0">
                      <v-col align-self="center" class="py-0" cols="auto">
                        <v-btn v-if="updatedAt"  :ripple="false" class="py-0" text><v-icon left>mdi-calendar-clock</v-icon> {{ updatedAt | moment("Do / MMM / YYYY")}}</v-btn>
                      </v-col>
                       <v-col align-self="center" class="py-0" cols="auto">
                          <v-btn :ripple="false" class="py-0" text><v-icon left>mdi-eye</v-icon> {{timesSeen}}</v-btn>
                      </v-col>
                       <v-col align-self="center" class="py-0" cols="auto">
                        <v-btn class="sharer py-0" data-sharer="facebook" :data-url="`${link}`" :ripple="false" text>{{$t('shareBtn')}}<v-icon right>mdi-share</v-icon></v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-img style="border-radius: 14px" :src="mainImageUrl"
                    :lazy-src="mainImageUrl"
                    ></v-img>
                  </v-col>
                </v-row>
            </v-card-subtitle>
            <v-card-text>
                <span class="body-text pb-3" v-html="body"></span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Get from '../services/Get'
export default {
  props: ['id'],
  metaInfo () {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { property: 'og:description', content: this.body },
        { property: 'og:image', content: 'https://voicesoncentralasia.org/wp-content/uploads/2018/06/city21.jpg' },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: `https://faol-news.netlify.app/#${this.$router.currentRoute.fullPath}` }
      ]
    }
  },
  data () {
    return {
      link: process.env.VUE_APP_FRONT_URL + this.$router.history.current.fullPath,
      updatedAt: '',
      routes: [],
      title: '',
      body: '',
      mainImageUrl: '',
      timesSeen: 0
    }
  },
  methods: {
    getSingleAnnouncement () {
      Get.getSingleAnnouncement(this.id, this.$store.state.lang).then(res => {
        console.log(res)
        this.title = res.announcement.title
        this.body = res.announcement.body
        this.mainImageUrl = res.announcement.mainImage.mainImageUrl
        this.timesSeen = res.views
        this.updatedAt = res.announcement.updatedAt
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getSingleAnnouncement()
    this.routes = this.$router.options.routes.map(el => {
      return {
        text: this.$t(el.meta.name),
        to: el.path,
        disabled: el.meta.disable
      }
    })
  }
}
</script>

<style>

</style>
