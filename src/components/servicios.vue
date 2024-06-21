<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img :src="image1" class="images"/>
      <q-card-section>
        <div class="text-overline text-orange-9">24 Horas</div>
        <div class="text-h5 q-mt-sm q-mb-xs">RESTAURANTE</div>
        <div class="text-caption text-grey">
         "Descubre una experiencia culinaria completa con nuestros deliciosos desayunos, exquisitos almuerzos y cenas irresistibles.
          Desde sabrosos platos matutinos que te llenarán de energía.
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />
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
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />
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
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />
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
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
         Dolore earum atque amet ipsum minus alias maxime quidem reprehenderit repellat? Beatae autem,
          vel non veritatis ab dicta iste iure earum aperiam.!"
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />
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
      <q-img :src="image5" />
      <q-card-section>
        <div class="text-overline text-orange-9">Dia</div>
        <div class="text-h5 q-mt-sm q-mb-xs">DRON</div>
        <div class="text-caption text-grey">
         "Sumérgete en el placer y la relajación con nuestra piscina cristalina. Disfruta de un oasis de frescura y diversión para toda
          la familia, hacer ejercicio o simplemente relajarte bajo el sol!"
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />
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
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />
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
          mollitia necessitatibus, vitae repellendus. Eum illum laborum vitae perspiciatis qui, sunt eaque fugiat quod!!"
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />
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
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />
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



    
    <!-- Additional cards follow the same pattern -->
  </div>
</template>

<script>
import { ref } from 'vue'
import image1 from '../assets/imagenH/presi.jpg'
import image2 from '../assets/imagenH/presi.jpg'
import image3 from '../assets/imagenH/presi.jpg'
import image4 from '../assets/imagenH/presi.jpg'
import image5 from '../assets/imagenS/dron.jpg'
import image6 from '../assets/imagenS/spa.jpg'
import image7 from '../assets/imagenH/presi.jpg'
import image8 from '../assets/imagenH/presi.jpg'
// Import additional images as needed

export default {
  setup () {
    return {
      expanded: ref(false),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
<style lang="sass" scoped>
.my-card 
  width: 100%
  max-width: 350px

</style>