<template>
  <div>
    <v-container class="px-9">
      <v-row justify="center">
        <v-col cols="7">
          <v-card elevation="0">
            <v-card-subtitle>
                <v-row class="py-0">
                  <v-col class="py-0" cols="auto">
                       <p class="header-text pb-3" >{{header}}</p>
                  </v-col>
                </v-row>
                <v-row class="py-0">
                   <v-col cols="auto">
                    <v-row align="center" class="py-0">
                      <v-col align-self="center" class="py-0" cols="auto">
                        <v-btn color="blue lighten-2" dark :ripple="false" class="py-0" text><v-icon left>mdi-calendar-clock</v-icon> 13:09</v-btn>
                      </v-col>
                       <v-col align-self="center" class="py-0" cols="auto">
                          <v-btn :ripple="false" class="py-0" text><v-icon left>mdi-eye</v-icon> 42342</v-btn>
                      </v-col>
                       <v-col align-self="center" class="py-0" cols="auto">
                        <v-btn :ripple="false" class="py-0" text>ulashish<v-icon right>mdi-share</v-icon></v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-img style="border-radius: 14px" src="https://voicesoncentralasia.org/wp-content/uploads/2018/06/city21.jpg"></v-img>
                  </v-col>
                </v-row>
            </v-card-subtitle>
            <v-card-text>
                <span class="body-text pb-3" v-for="i in 3" :key="i">{{content}}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: '«Яшил» ва «сариқ» ҳудудларда очиқ сайилгоҳлар фаолиятига рухсат берилади',
      content: `Республика махсус комиссияси қарорига кўра, 22 май кунидан Ўзбекистоннинг «яшил» ва «сариқ» тоифадаги ҳудудларида очиқ сайилгоҳ, музей ва санъат галереялари фаолиятига (ўйингоҳ ва овқатланиш шохобчалари бундан мустасно) рухсат берилади.
                Бунда коронавирус инфекцияси иккинчи тўлқини олдини олиш мақсадида ушбу масканларга кириш жойларида мажбурий равишда барча ташриф буюрувчилар тана ҳароратларини ўлчанган ҳолда киритилиши (тепловизор ёки пирометр), шахсий ҳимоя воситаларида бўлишлари (ниқоб), шунингдек, ташриф буюрувчилар 2 метрлик ижтимоий масофани сақлаши талаб этилади.
                Бундан ташқари, ушбу масканларда ташриф буюрувчилар уч кишидан кўп бўлиб тўпланиши олдини олиш бўйича мазкур сайилгоҳ, кўнгил очар маскан ва музейлар раҳбарияти зиммасига юклатилади.`
    }
  }
}
</script>

<style>

</style>
