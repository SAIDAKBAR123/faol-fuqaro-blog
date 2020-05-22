<template>
  <div>
      <v-container>
          <v-row justify-md="center" justify-lg="center">
              <v-col cols="12">
                <v-item-group>
                    <v-container fluid>
                        <v-row justify-lg="center">
                            <v-col
                            v-for="n in 6"
                            :key="n"
                            cols="auto"
                            md="auto"
                            >
                            <v-item v-slot:default="{ active, toggle }">
                                <v-btn text :color="active ? 'primary' : ''" @click="toggle">Hello world</v-btn>
                            </v-item>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-item-group>
              </v-col>
              <v-col cols="12">
                  <v-divider></v-divider>
              </v-col>
          </v-row>
          <v-row justify-md="space-between" justify="center">
              <v-col cols="auto">
                  <h2>Recent News</h2>
              </v-col>
              <v-col cols="auto">
                    <v-btn outlined rounded color="grey darken-2"><v-icon left color="grey darken-4">mdi-filter-variant</v-icon> filter</v-btn>
              </v-col>
          </v-row>
          <v-row>
              <v-col v-for="i in 8" :key="i" cols="12" md="3" lg="3">
                <v-hover
                  v-slot:default="{ }"
                >
                  <v-card to="/article/2">
                      <v-img
                        aspect-ratio="1.4"
                        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                        gradient="180deg, rgba(248, 248, 248, 0.007), rgba(26, 26, 26, 0.884)"
                      >
                        <v-row style="height:100%" align="end">
                            <v-col align-self="end" cols="auto">
                                <p class="white--text pa-2 body-text">This is just text</p>
                            </v-col>
                        </v-row>
                      </v-img>
                  </v-card>
                </v-hover>
              </v-col>
          </v-row>
          <v-row justify="center">
              <v-col cols="auto">
                  <v-btn rounded text> Load more</v-btn>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
