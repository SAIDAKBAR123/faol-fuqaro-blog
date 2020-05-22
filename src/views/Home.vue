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
              <v-col v-for="(item,i) in newsList" :key="i" cols="12" md="4" lg="4">
                <v-hover
                  v-slot:default="{ }"
                >
                  <v-card :to="`/article/${item.id}`">
                      <v-img
                        aspect-ratio="1.4"
                        :src="item.imageUrl"
                        gradient="180deg, rgba(248, 248, 248, 0.007), rgba(26, 26, 26, 0.884)"
                      >
                        <v-row style="height:100%" align="end">
                            <v-col align-self="end" cols="auto">
                                <p class="white--text pa-2 pb-0 body-text" v-text="item.header"></p>
                                <span><v-btn class="body-text py-0" dark :ripple="false" text><v-icon left>mdi-calendar-clock</v-icon>{{item.date}}</v-btn></span>
                            </v-col>
                        </v-row>
                      </v-img>
                  </v-card>
                </v-hover>
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
export default {
  data () {
    return {
      newsList: [
        {
          header: 'Ўзбекистонда 2020 йилги Рамазон ҳайитини нишонлаш ва ҳайит намозини ўқиш тартиби эълон қилинди',
          imageUrl: 'https://storage.kun.uz/source/6/-IQ7iE2JEpUIOyy69Us4V2msc3u6KNLU.jpg',
          date: '07:00 AM'
        },
        {
          header: 'Президент фармони: Тадбиркорлик субъектлари 1 сентябргача мол-мулк ва ер солиғи тўлашдан озод этилади',
          imageUrl: 'https://storage.kun.uz/source/6/eNSQzUIxzLvIyQl_M-g2_r3i5N1dqRJn.jpg',
          date: '2:00 PM'
        },
        {
          header: 'Давлат банкларидан 6таси хусусийлаштирилади',
          imageUrl: 'https://storage.kun.uz/source/6/-ANruVpFecpyY1jzHz-pZVt80I2YlXX3.jpg',
          date: '23:00'
        },
        {
          header: 'Facebook Ўзбекистонда солиқ тўлашни бошлади',
          imageUrl: 'https://storage.kun.uz/source/6/aEi3Q0ZOkmAU3JRKJ86vmwuYUu9elD8S.jpg',
          date: '21:23'
        },
        {
          header: 'Комендантлик соати ва жамоат жойларида янги чекловлар. Дунё мамлакатлари бу йил Рамазон ҳайитини қандай кутмоқда?',
          imageUrl: 'https://storage.kun.uz/source/6/dZl0Hz79sUy3YAN1MIiNTFNvxeEgdfAV.jpg',
          date: '21:23'
        },
        {
          header: 'Ўзбекистонда 2020 йилги Рамазон ҳайитини нишонлаш ва ҳайит намозини ўқиш тартиби эълон қилинди',
          imageUrl: 'https://storage.kun.uz/source/6/-IQ7iE2JEpUIOyy69Us4V2msc3u6KNLU.jpg',
          date: '07:00 AM'
        }
      ],
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
    }
  }
}
</script>

<style>

</style>
