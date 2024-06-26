<template>
  <q-layout view="hHh lpR lff">
    <q-header reveal elevated class="bg-secondary text-white" height-hint="98">
      <q-toolbar class="toolbar">
        <q-toolbar-title class="hotel-title">
          <q-avatar  style="text-align: center;">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar >
          HOTEL ⭐⭐⭐⭐⭐
        </q-toolbar-title>
      </q-toolbar>
      
      <q-tabs class="tabs">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/habitaciones" label="Habitaciones" />
        <q-route-tab to="/deportesExtremos" label="Deportes Extremos" />
        <q-route-tab to="/servicios" label="Servicios" />
        <q-route-tab to="/contacto" label="Contacto" />
      </q-tabs>
    </q-header>
    
    <q-page-container>
      <router-view />
    </q-page-container>
    
    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title align="center">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>⭐⭐⭐</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

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
    <q-btn @click="showReservaForm = true">Reservar Ahora</q-btn>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import ReservaForm from './components/ReservaForm.vue';

const reservationsCount = ref(0);
const reservations = ref([]);
const showReservaForm = ref(false);

const handleReservationMade = (reservation) => {
  reservationsCount.value++;
  reservations.value.push({
    id: reservationsCount.value,
    name: reservation.name,
    telefono: reservation.telefono,
    email: reservation.email,
    date: reservation.date
  });
  showReservaForm.value = false;
};
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: center;
}

.hotel-title {
  font-size: 24px;
  text-align:center;
}

.tabs {
  display: flex;
  justify-content: center;
  font-size: 14px;
}

.reservation-counter {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  z-index: 999; /* Asegura que esté por encima de otros elementos */
}

@media (max-width: 600px) {
  .toolbar {
    flex-direction: column;
  }

  .hotel-title {
    font-size: 18px;
    margin-top: 10px;
  }

  .tabs {
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }
}
</style>
