<template>

  <v-dialog v-model="props.modelValue" :width="height" :height="height">
    <v-card>
      <h1> hello world</h1>

    </v-card>

  </v-dialog>

</template>

<script setup>

const props = defineProps({

  modelValue: {type: Boolean},
  width: {type: Number, default: 200},
  height: {type: Number, default: 200},
})

</script>
