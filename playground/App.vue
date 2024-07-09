<script setup lang="ts">
</script>

<template>
  <div
    v-highlight="{
      keywords: ['love'],
      options: {
        defaultDecoration: {
          color: 'red',
        },
      },
    }"
  >
    I love KFC.
  </div>
  <div v-hovertime="{ mouseLeaveCallback: (time) => { console.log(time) } }">
    1111
  </div>
</template>
