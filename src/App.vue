<template>
  <v-app>
    <v-navigation-drawer
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      theme="dark"
      permanent
    >
      <template v-slot:prepend>
        <div class="pa-2">
          <v-btn block @click="showDialog">
            Show Dialog1
          </v-btn>
        </div>
      </template>
      <v-list nav>
        <v-list-item v-for="i in 9">
          <div class="pa-2">
            <v-btn @click="showDialog"> Show Dialog List{{ i }}</v-btn>
          </div>
        </v-list-item>

      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="showDialog">
            Show Dialog2
          </v-btn>
        </div>
      </template>

    </v-navigation-drawer>
    <v-main>
      <v-card class="h-100">
        <iframe src="/iframe.html" class="w-100 h-100"></iframe>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import createDialog from '@/components/LocalDialog/index.js'

 function showDialog(){
  createDialog()
 }

</script>


<style></style>
