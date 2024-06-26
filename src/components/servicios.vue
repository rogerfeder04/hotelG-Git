<template>
  <div class="q-pa-md row items-start q-gutter-md">


  <q-card class="my-card" flat bordered>
      <q-img :src="image1"/>
      <q-card-section>
        <div class="text-overline text-orange-9">24 Horas</div>
        <div class="text-h5 q-mt-sm q-mb-xs">RESTAURANTE</div>
        <div class="text-caption text-grey">
          "Descubre una experiencia culinaria completa con nuestros deliciosos desayunos, exquisitos almuerzos y cenas irresistibles. Desde sabrosos platos matutinos que te llenarán de energía."
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>

    <!-- Repeat for other cards, updating :src="imageX" for each -->
    <q-card class="my-card" flat bordered>
      <q-img :src="image2" />
      <q-card-section>
        <div class="text-overline text-orange-9">Dia</div>
        <div class="text-h5 q-mt-sm q-mb-xs">BUGGY</div>
        <div class="text-caption text-grey">
        "Explora la aventura al máximo con nuestro servicio de alquiler de buggies todo terreno. Conquista paisajes impresionantes y 
        caminos difíciles mientras disfrutas de la emoción y la libertad.
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
       
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div> <q-btn flat color="secondary" label="Reservar" />
      </q-slide-transition>
    </q-card>




    
    <q-card class="my-card" flat bordered>
      <q-img :src="image5" />
      <q-card-section>
        <div class="text-overline text-orange-9">Dia</div>
        <div class="text-h5 q-mt-sm q-mb-xs">DRON</div>
        <div class="text-caption text-grey">
         "Su capacidad para desplegarse de manera rápida y eficiente permite
          obtener información vital en tiempo real, esencial para coordinar 
          operaciones de rescate, evaluar daños y salvar vidas.!"
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>




 <q-card class="my-card" flat bordered>
      <q-img :src="image3" />
      <q-card-section>
        <div class="text-overline text-orange-9">Dia</div>
        <div class="text-h5 q-mt-sm q-mb-xs">PISCINA</div>
        <div class="text-caption text-grey">
         "Sumérgete en el placer y la relajación con nuestra piscina cristalina. Disfruta de un oasis de frescura y diversión para toda
          la familia, hacer ejercicio o simplemente relajarte bajo el sol!"
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>




    <q-card class="my-card" flat bordered>
      <q-img :src="image4" />
      <q-card-section>
        <div class="text-overline text-orange-9">Dia</div>
        <div class="text-h5 q-mt-sm q-mb-xs">CAMPING</div>
        <div class="text-caption text-grey">
         "Camping de montaña en los Andes Santander es ideal para aquellos viajeros 
         que les gusta estar en contacto directo  con la naturaleza o alejarse del estrés la
          ciudad!"
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />

      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>







    <q-card class="my-card" flat bordered>
      <q-img :src="image6" />
      <q-card-section>
        <div class="text-overline text-orange-9">Dia</div>
        <div class="text-h5 q-mt-sm q-mb-xs">SPA</div>
        <div class="text-caption text-grey">
         "Sumérgete en el placer y la relajación con nuestra piscina cristalina. Disfruta de un oasis de frescura y diversión para toda
          la familia, hacer ejercicio o simplemente relajarte bajo el sol!"
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>



    <q-card class="my-card" flat bordered>
      <q-img :src="image7" />
      <q-card-section>
        <div class="text-overline text-orange-9">Dia</div>
        <div class="text-h5 q-mt-sm q-mb-xs">SHOW DE CABALLOS</div>
        <div class="text-caption text-grey">
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus natus labore deleniti ipsum dolorum laboriosam
          mollitia necessitatibus, vitae repellendus!"
        </div>
      </q-card-section>


      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>


     <q-card class="my-card" flat bordered>
      <q-img :src="image8" />
      <q-card-section>
        <div class="text-overline text-orange-9">24 Horas</div>
        <div class="text-h5 q-mt-sm q-mb-xs">PESCA</div>
        <div class="text-caption text-grey">
        "Embárcate en una aventura única con nuestra oferta de pesca. Descubre la emoción de capturar tus propios trofeos en aguas
         llenas de vida y paisajes impresionantes.Si buscando tu primera gran captura!"
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
        
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>

        
      </q-slide-transition>
    </q-card>
    <reserva-form :show="showReservationForm" @close="showReservationForm = false" />
  </div>
</template>

<script>
import { ref } from 'vue'
import image1 from '../assets/imagenS/restaurant.jpg'
import image2 from '../assets/imagenS/bugy.jpg'
import image3 from '../assets/imagenS/piscina.jpg'
import image4 from '../assets/imagenS/camping2.jpg'
import image5 from '../assets/imagenS/dron2.jpg'
import image6 from '../assets/imagenS/spa.jpg'
import image7 from '../assets/imagenS/caballos.jpg'
import image8 from '../assets/imagenS/pesca.jpg'
import ReservaForm from './ReservaForm.vue'; 

// Import additional images as needed

export default {
  components: {
    ReservaForm
  },
  setup() {
    const showReservationForm = ref(false);
    const expanded = ref(false)
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    return {
      showReservationForm,
      expanded,
      lorem,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,

      // Add additional images here
    }
  }
}
</script>

<style lang="sass" scoped>

.my-card 
  width: 100%
  max-width: 350px
  margin-bottom: 20px

.image-container
  width: 100%
  height: 200px
  overflow: hidden

.card-image
  width: 100%
  height: 80%
  object-fit: cover
</style>