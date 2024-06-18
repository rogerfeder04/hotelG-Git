<template>
  <q-layout view="hHh lpR lff">

    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar align="center">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          HOTEL CENTURY
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="inicio" />
        <q-route-tab to="/Contacto" label="Contacto" />
        <q-route-tab to="/deportesExtremos" label="deportesExtremos" />
        <q-route-tab to="/habitaciones" label="habitaciones" />
        <q-route-tab to="/servicios" label="servicios" />

      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white" >
      <q-toolbar>
        <q-toolbar-title align="center">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>