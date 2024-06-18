<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" :img-src="image1" />
      <q-carousel-slide :name="2" :img-src="image2" />
      <q-carousel-slide :name="3" :img-src="image3" />
      <q-carousel-slide :name="4" :img-src="image4" />
    </q-carousel>
    
    <p>explora nuestros colores</p> 
    <h1 style="text-align: center">HOTEL RANCHO LOS TRES POTRILLOS</h1>
  </div>
</template>

<script>
import { ref } from 'vue'
import image1 from '@/assets/imagenesHotel/inicio.jpg'
import image2 from '@/assets/imagenesHotel/gallina.jpg'
import image3 from '@/assets/imagenesHotel/hotel.jpeg'
import image4 from '@/assets/imagenesHotel/pieza.jpg'

export default {
  setup () {
    const slide = ref(1)
    return {
      slide,
      image1,
      image2,
      image3,
      image4
    }
  }
}
</script>


<!-- <div>
  <div>  
   <p>explora nuestros colores</p> 
  <h1 style="text-align: center">HOTEL RANCHO LOS TRES POTRILLOS</h1>
  <h2>VELEZ, KILOMETRO 3, VIA CHIPATA</h2>
  <div> -->
    <!-- <img :src="imageSrc" alt="Inicio"> importar imagen de script -->
    <!-- <img src="../imagenesHotel/inicio.jpg" alt="IMG_hotel">
  </div>
  
</div>

  </div> -->




<!-- 
// import imageSrc from '../imagenesHotel/inicio.jpg';

// export default {
//   data() {
//     return {
//       imageSrc
//     };
//   }
// }; -->
