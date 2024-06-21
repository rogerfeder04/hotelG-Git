<template>
  <div class="q-pa-md">
    <q-carousel
      arrows    
      color="red"
      animated
      v-model="slide"
      height="500px"
    >
      <q-carousel-slide name="first" :img-src="image2">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">SENDERISMO</div>
          <div class="text-subtitle1">
            Paseos por los lugares mas motañosos de la región, disfrutando paisajes.
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" :img-src="image1">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">PASEO EN CABALLO</div>
          <div class="text-subtitle1">
            Este recorrido es perfecto tanto para principiantes
            como para amantes de los equinos, que deseen disfrutar de un breve pero memorable paseo 
            en un entorno tranquilo y pintoresco.
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" :img-src="image3">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">EXCURSIÓN EN BUGGY</div>
          <div class="text-subtitle1">
            Este recorrido es perfecto tanto para principiantes
            como para amantes de los caminos difíciles, La edad mínima recomendada para montar 
            en buggy es a partir de los 15 años de edad.
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'
import image1 from '../assets/imagenesHotel/caballo.jpg'
import image2 from '../assets/imagenH/senderismo.jpg'
import image3 from '../assets/imagenesHotel/bugy.jpg'

export default {
  setup () {
    const slide = ref('first')
    return {
      slide,
      image1,
      image2,
      image3
    }
  }
}
</script>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .7);
}

:deep(.q-carousel__arrow .q-icon) {
  color: #e113d3; /* Color de las flechas */
  font-size: 28px; /* Tamaño de las flechas */
}
</style>

<!-- <template>
<div>

  <h1 style="text-align:center" >DEPORTES EXTREMOS</h1>
<div>
  <h6>Paseo en caballo</h6>
 <div> 
  <p> Te invitamos a disfrutar de nuestro exclusivo servicio de paseo a caballo de 15 minutos
    alrededor de nuestra encantadora finca. Este recorrido es perfecto tanto para principiantes
    como para amantes de los caballos que deseen disfrutar de un breve pero memorable paseo 
    en un entorno tranquilo y pintoresco</p>
<img src="../assets/imagenesHotel/caballo.jpg" alt="IMG_caballo">
 </div>
 <p>La edad mínima recomendada para montar a caballo es a partir de los 5 años de edad, 
    Desde los 5 años los pequeños podrán comenzar montando en poni. posiblemente a los 9 puede estar preparado
    para pasar de nivel y comenzar a prepararse con caballos.
</p>
</div>
 <div>

 </div>
  </div>
</template> -->