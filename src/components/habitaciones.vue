<template>
  <div>
    <div class="litle3">
      <h4 style="text-align: center">SUITE</h4>

      <div class="q-pa-md row items-start q-gutter-md">
        <!-- Suite Presidencial -->
        <q-card class="my-card" flat bordered align="center">
          <q-img :src="image1" />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Nuestra Suite Presidencial</div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" /> 250 ft
              </div>
            </div>
            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Santander</div>
            <div class="text-caption text-grey">
              Disfruta de un amplio espacio decorado con gusto, equipado con todas las comodidades
              modernas que necesitas para relajarte y sentirte como en casa.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
          </q-card-actions>
        </q-card>

        <!-- Suite Semipresidencial -->
        <q-card class="my-card" flat bordered>
          <q-img :src="image2" />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Suite Semipresidencial</div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" /> 250 ft
              </div>
            </div>
            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Santander</div>
            <div class="text-caption text-grey">
              Sumérgete en la elegancia y el confort de nuestra suite, diseñada para ofrecerte una estancia inigualable.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
          </q-card-actions>
        </q-card>

        <!-- Suite Normal -->
        <q-card class="my-card" flat bordered>
          <q-img :src="image3" />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Suit Normal</div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" /> 250 ft
              </div>
            </div>
            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Santander</div>
            <div class="text-caption text-grey">
              Comodidad diseñada para satisfacer tus más altas expectativas. Con una combinación perfecta de estilo contemporáneo y servicios exclusivos.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
          </q-card-actions>
        </q-card>

        <!-- Suite Cama Doble -->
        <q-card class="my-card" flat bordered>
          <q-img :src="image4" />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Suite cama doble</div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" /> 250 ft
              </div>
            </div>
            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Santander</div>
            <div class="text-caption text-grey">
              Con una cama king-size que garantiza el descanso perfecto, sumérgete en la elegancia y el confort de nuestra suite.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <reserva-form :show="showReservationForm" @close="showReservationForm = false" />
    </div>

    <div class="litle3">
      <h4 style="text-align: center">SUITE FAMILIAR</h4>

      <div class="q-pa-md row items-start q-gutter-md">
        <!-- Suite Presidencial -->
        <q-card class="my-card" flat bordered align="center">
          <q-img :src="image1" />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Nuestra Suite Presidencial</div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" /> 250 ft
              </div>
            </div>
            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$120000・Santander</div>
            <div class="text-caption text-grey">
              Disfruta de un amplio espacio decorado con gusto, equipado con todas las comodidades modernas que necesitas para relajarte y sentirte como en casa.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
          </q-card-actions>
        </q-card>

        <!-- Suite Semipresidencial -->
        <q-card class="my-card" flat bordered>
          <q-img :src="image2" />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Suite Semipresidencial</div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" /> 250 ft
              </div>
            </div>
            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Santander</div>
            <div class="text-caption text-grey">
              Sumérgete en la elegancia y el confort de nuestra suite, diseñada para ofrecerte una estancia inigualable.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
          </q-card-actions>
        </q-card>

        <!-- Suite Normal -->
        <q-card class="my-card" flat bordered>
          <q-img :src="image3" />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Suit Normal</div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" /> 250 ft
              </div>
            </div>
            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Santander</div>
            <div class="text-caption text-grey">
              Comodidad diseñada para satisfacer tus más altas expectativas. Con una combinación perfecta de estilo contemporáneo y servicios exclusivos.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
          </q-card-actions>
        </q-card>

        <!-- Suite Cama Doble -->
        <q-card class="my-card" flat bordered>
          <q-img :src="image4" />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Suite cama doble</div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="place" /> 250 ft
              </div>
            </div>
            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>
          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Santander</div>
            <div class="text-caption text-grey">
              Con una cama king-size que garantiza el descanso perfecto, sumérgete en la elegancia y el confort de nuestra  uite.
             </div>
          </q-card-section>
          <q-separator/>
          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary" @click="showReservationForm = true">RESERVAR</q-btn>
            
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import image1 from '../assets/imagenH/presi.jpg'
import image2 from '../assets/imagenH/suit33.jpg'
import image3 from '../assets/imagenH/suit3.jpg'
import image4 from '../assets/imagenH/suit444.jpg'
import ReservaForm from './ReservaForm.vue'
export default {
  components: {
    ReservaForm
  },
  setup() {
    const showReservationForm = ref(false)

    return {
      showReservationForm,
      stars: ref(4),
      image1,
      image2,
      image3,
      image4
    }
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap')
.my-card
  width: 100%
  max-width: 350px
  height: 450px
  margin-bottom: 20px

.litle3
  margin-top: 20px
  padding: 10px
  background-color: #f0f0f0
  border-radius: 25px
  h3
    color: #333
    text-transform: uppercase
</style>
