
<template>
  <div class="q-pa-md">
   <div  class="litle"> <h4> ⭐BIENVENIDOS RANCHO TRES POTRILLOS⭐</h4>
      
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
  </div>
    <div  class="litle2">
    <h4>Explora nuestros colores
         <!-- Contador de Reservaciones -->
         <div class="reservation-counter" v-if="reservationsCount > 0">
      Reservaciones realizadas: {{ reservationsCount }}
      <ul>
        <li v-for="reservation in reservations" :key="reservation.id">
          {{ reservation.name }} - {{ reservation.date }}
        </li>
      </ul>
    </div>

    <!-- Formulario de Reservas -->
    <ReservaForm :show="showReservaForm" @reservation-made="handleReservationMade" @close="showReservaForm = false" />
    <q-btn @click="showReservaForm = true" style="color: blue;">Reservar Ahora</q-btn>
    </h4>
      <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">

      <div class="col-4">
<h6 class="opcion">🏞️Aventura</h6>
        <q-img
          src="../assets/imagenH/senderismo.jpg"
          :ratio="4/3"
        />
    
      </div>

      <div class="col-4">
 <h6 class="opcion"> ⚓Natacion</h6>
        <q-img
          src="../assets/imagenH/inicio.jpg"
          :ratio="1"
        />
      </div>

      <div class="col-4">
  <h6 class="opcion">🏜️Diversidad</h6>
        <q-img
          src="@/assets/imagenH/cabaña10.jpg"
          :ratio="4/3"
        />
      </div>
    </div>
  </div>

  <div><p style="color: white;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, hic. Sed at eius omnis eaque repudiandae vel beatae? Unde,
    illum magnam! Optio, veritatis. Molestiae, nostrum ad. Ipsum nesciunt sed laudantium.</p></div>
    </div>
    <reserva-form :show="showReservationForm" @close="showReservationForm = false" />
  </div>
</template>

<script>
import { ref } from 'vue'
import image1 from '@/assets/imagenH/cabaña8.jpg'
import image2 from '@/assets/imagenH/cabaña6.jpg'
import image3 from '@/assets/imagenH/cabaña5.jpg'
import image4 from '@/assets/imagenH/cabaña10.jpg'
import ReservaForm from './ReservaForm.vue'; 


export default {
  components: {
    ReservaForm
  },
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

.litle, .litle2 {
  text-align: center;
  color: rgb(5, 36, 26);
  margin: 2px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.litle2 {
  background-image: url('../assets/imagenS/fondo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
}

.opcion-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Espacio entre los elementos en pantallas pequeñas */
}

.opcion {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

@media (max-width: 600px) {
  .responsive-options {
    flex-direction: column;
  }
}
</style>
