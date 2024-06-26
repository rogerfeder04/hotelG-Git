<template>
  <q-dialog v-model="dialog">
    <q-card class="reservation-card">
      <q-card-section>
        <div class="text-h6" style="text-align: center;">Formulario de Reservaciones</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-input v-model="name" label="Nombre" :error="errors.name" :error-message="errors.nameMessage" outlined />
        <div v-if="errors.name" class="error-message">{{ errors.nameMessage }}</div>

        <q-input v-model="email" label="Email" type="email" :error="errors.email" :error-message="errors.emailMessage" outlined />
        <div v-if="errors.email" class="error-message">{{ errors.emailMessage }}</div>

        <q-input v-model="telefono" label="Teléfono" type="tel" :error="errors.telefono" :error-message="errors.telefonoMessage" outlined />
        <div v-if="errors.telefono" class="error-message">{{ errors.telefonoMessage }}</div>

        <q-input v-model="date" label="Fecha de Reserva" type="date" :error="errors.date" :error-message="errors.dateMessage" outlined />
        <div v-if="errors.date" class="error-message">{{ errors.dateMessage }}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn flat label="Reservar ahora" color="primary" @click="makeReservation" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit }) {
    const dialog = ref(props.show);
    const name = ref('');
    const telefono = ref('');
    const email = ref('');
    const date = ref('');

    const errors = ref({
      name: false,
      nameMessage: '',
      email: false,
      emailMessage: '',
      telefono: false,
      telefonoMessage: '',
      date: false,
      dateMessage: ''
    });

    const validateFields = () => {
      let valid = true;

      if (!name.value) {
        errors.value.name = true;
        errors.value.nameMessage = 'El nombre no puede estar vacío.';
        valid = false;
      } else {
        errors.value.name = false;
        errors.value.nameMessage = '';
      }

      if (!email.value.includes('@')) {
        errors.value.email = true;
        errors.value.emailMessage = 'El email debe contener un "@" válido.';
        valid = false;
      } else {
        errors.value.email = false;
        errors.value.emailMessage = '';
      }

      if (!telefono.value || telefono.value.length !== 10 || isNaN(telefono.value)) {
        errors.value.telefono = true;
        errors.value.telefonoMessage = 'El teléfono debe tener 10 dígitos y ser numérico.';
        valid = false;
      } else {
        errors.value.telefono = false;
        errors.value.telefonoMessage = '';
      }

      const today = new Date().toISOString().split('T')[0];
      if (!date.value || date.value < today) {
        errors.value.date = true;
        errors.value.dateMessage = 'La fecha debe ser la actual o futura.';
        valid = false;
      } else {
        errors.value.date = false;
        errors.value.dateMessage = '';
      }

      return valid;
    };

    const makeReservation = () => {
      if (validateFields()) {
        emit('reservation-made', {
          name: name.value,
          telefono: telefono.value,
          email: email.value,
          date: date.value
        });
        dialog.value = false;
        emit('close');
      }
    };

    watch(() => props.show, (newVal) => {
      dialog.value = newVal;
    });

    return {
      dialog,
      name,
      telefono,
      email,
      date,
      makeReservation,
      errors
    };
  }
};
</script>

<style scoped>
.reservation-card {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.q-card-section {
  padding: 20px;
}

.q-card-actions {
  padding: 16px;
}

.q-btn {
  margin-left: 8px;
  margin-right: 8px;
}

.q-input {
  margin-bottom: 16px;
}

.error-message {
  color: #f44336;
  font-size: 0.75rem;
  margin-top: 4px;
}

@media screen and (max-width: 480px) {
  .reservation-card {
    max-width: 100%;
    border-radius: 0;
  }
}
</style>
