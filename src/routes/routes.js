import { createRouter, createWebHashHistory } from 'vue-router'
import inicio from '../components/inicio.vue'
import Contacto from '../components/Contacto.vue'
import deportesExtremos from '../components/deportesExtremos.vue'
import habitaciones from '../components/habitaciones.vue'
import servicios from '../components/servicios.vue'

const routes = [
  { path: '/', component: inicio },
  { path: '/Contacto', component: Contacto },
  { path: '/deportesExtremos', component: deportesExtremos },
  { path: '/habitaciones', component: habitaciones },
  { path: '/servicios', component: servicios }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
