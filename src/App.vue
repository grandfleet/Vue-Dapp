 /**
   * @file App.vue
   * @param {object} - privacy gown
   * @param {object} - security
   * @summary typical jsdoc not working
   */
   
<template>
  <div id="app">
    <v-app>
       <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
             src="https://vuetifyjs.com/doc-images/cards/desert.jpg"
            height="200px"
          ></v-card-media>
              <img src="./assets/logo.png" height="200px">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
 /**
   * @file App.vue
   * @param {object} - privacy gown
   * @param {object} - security
   * @summary typical jsdoc not working
   */
export default {
   name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
