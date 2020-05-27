<template>
  <div>
      <v-container>
          <v-row justify-md="center" justify-lg="center">
              <v-col cols="12">
                <v-item-group mandatory>
                    <v-container fluid>
                        <v-row >
                            <v-col
                            v-for="(item, n) in problemTypes"
                            :key="n"
                            cols="auto"
                            md="auto"
                            class="px-1"
                            >
                            <v-item v-slot:default="{ active,toggle }">
                                <v-btn text :color="active ? 'primary' : ''" @click="getResult(item.id, toggle)">{{$t(item.type)}}</v-btn>
                            </v-item>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-item-group>
              </v-col>
              <v-col cols="12">
                  <v-divider style="background-color:#2F1E84; width:30%"></v-divider>
              </v-col>
          </v-row>
          <v-row justify-md="space-between" justify="center">
              <v-col cols="auto">
                  <h2 class="header-text">{{$t('newsHeader')}}</h2>
              </v-col>
              <v-col cols="auto">
                    <v-btn outlined rounded color="grey darken-2"><v-icon left color="grey darken-4">mdi-filter-variant</v-icon> {{$t('filter')}}</v-btn>
              </v-col>
          </v-row>
          <v-row>
             <v-col cols="12" md="8" xl="9">
               <v-row >
                  <v-col  v-for="(item,i) in newsList" :key="i" cols="12" md="4" lg="4">
                    <v-hover
                      v-slot:default="{ }"
                    >
                      <v-card :to="`/article/${item.id}`">
                          <v-img
                            aspect-ratio="1.4"
                            :src="item.mainImage.mainImageUrl"
                            gradient="180deg, rgba(248, 248, 248, 0.007), rgba(26, 26, 26, 0.884)"
                          >
                            <v-row style="height:100%" align="end">
                                <v-col align-self="end" cols="auto">
                                    <p class="white--text pa-2 pb-0 body-text" v-text="item.title"></p>
                                    <span><v-btn class="body-text py-0" dark :ripple="false" text><v-icon left>mdi-calendar-clock</v-icon>2 Jan</v-btn></span>
                                </v-col>
                            </v-row>
                          </v-img>
                      </v-card>
                    </v-hover>
                </v-col>
               </v-row>
             </v-col>
             <v-col  cols="12" md="4" xl="3">
               <div >
                  <v-card color="grey lighten-5" tile flat>
                 <v-row justify="center">
                   <v-col cols="12" class="py-0">
                     <h3 class="header-text pa-2 text--secondary">E'lonlar</h3>
                   </v-col>
                   <v-col :class="i == 0 ? 'pb-1' : 'py-1'" v-for="(item,i) in annouce" :key="i" cols="12">
                     <v-card :to="`/announcement/${item.id}`" elevation="0" flat class=""  color="grey lighten-5">
                       <v-card-text class="py-0">
                         <v-row >
                           <v-col align-self="center" cols="auto">
                             <v-card width="90" height="90" color="grey lighten-5">
                               <v-card-text>
                                 <div class="text-center">
                                   <h1>{{item.createdAt | moment("Do") }}</h1>
                                   <h2>{{item.createdAt  | moment("MMM") }} </h2>
                                   <small>{{ item.createdAt | moment("YYYY") }}</small>
                                 </div>
                               </v-card-text>
                             </v-card>
                           </v-col>
                           <v-col cols="8">
                             <h4 class=" text--white">{{item.title}}</h4>
                             <p>{{item.subtitle}}</p>
                           </v-col>
                         </v-row>
                       </v-card-text>
                     </v-card>
                   </v-col>
                   <v-col cols="12">
                     <v-btn color="primary" text>ko'proq</v-btn>
                   </v-col>
                 </v-row>
               </v-card>
               </div>
             </v-col>
          </v-row>
          <v-row justify="center">
              <v-col cols="auto">
                  <v-btn rounded text color="primary"> {{$t('loadMoreBtn')}}</v-btn>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import Get from '../services/Get'
export default {
  data () {
    return {
      sizeHeight: window.innerHeight,
      annouce: [
        {
          day: '2',
          month: 'Sep',
          year: '2020',
          period: '14:00 ~ 20:00',
          title: 'Toshkent shahridagi Inha universitetga qabul boshlandi',
          subtitle: 'Har qanday qoshimcha malumotlarni quydagi sarlovha ostidan bilib olishingiz mumkin',
          path: '/das/23'
        }
      ],
      newsList: [],
      problemTypes: [
        {
          id: '2',
          type: 'btn'
        },
        {
          id: '23',
          type: 'button1'
        },
        {
          id: '2w3',
          type: 'button4'
        },
        {
          id: '233',
          type: 'button3'
        },
        {
          id: '243',
          type: 'button2'
        }

      ]
    }
  },
  methods: {
    getResult (val, toggle) {
      console.log(val)
      toggle()
    },
    getAll () {
      Get.getPosts(this.$store.state.lang).then(res => {
        console.log(res)
        this.newsList = res
      }).catch(err => {
        console.log(err)
      })
      Get.getAnnouncements(this.$store.state.lang).then(res => {
        this.annouce = res
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getAll()
  }
}
</script>

<style scoped>
.das{
color: rgba(44, 49, 63, 0.815);
color: rgb(245, 245, 245);
}
</style>
