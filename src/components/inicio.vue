<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" :img-src="image1" />
      <q-carousel-slide :name="2" :img-src="image2" />
      <q-carousel-slide :name="3" :img-src="image3" />
      <q-carousel-slide :name="4" :img-src="image4" />
    </q-carousel>
    <div  class="litle">
    <h4>Explora nuestros colores al atardecer</h4>
    <h3> ⭐BIENVENIDOS A NUESTRO HOTEL⭐</h3>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import image1 from '@/assets/imagenH/cabaña8.jpg'
import image2 from '@/assets/imagenH/cabaña6.jpg'
import image3 from '@/assets/imagenH/cabaña5.jpg'
import image4 from '@/assets/imagenH/cabaña10.jpg'

export default {
  setup () {
    const slide = ref(1)
    const autoplay = ref(true)

    return {
      slide,
      autoplay,
      image1,
      image2,
      image3,
      image4
    }
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.litle{
  text-align: center;
  color: rgb(5, 36, 26);
}

h3{
  color: rgb(5, 36, 26); 
}
</style>
