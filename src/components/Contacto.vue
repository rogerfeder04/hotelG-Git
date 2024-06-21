<!-- <template>
 <div> 
  <h3 style="text-align:center">INFORMACION DE CONTACTO</h3>
  <div>
  <h6>🏠Direccion</h6>
  <p>velez km 7 via chipata, Chipatá, Colombia, 057</p>
  <h6>📲Celular</h6>
  <p>314 7710906 Celular</p>
  <h6>💌Gmail</h6>
  <p>hotelranchotrespotrillos@gmail.com</p>

  <h3>INFORMACION BASICA</h3>

<h6>⭐🌟Calificación </h6>
  <p>4,4 (80 opiniones)</p>
  
<h6>🕓Horario </h6>
  <p>Siempre abierto</p>

<h6>💰Rango de precios </h6>
  <p>Establecido por el cliente</p>

</div>
 </div>
</template> -->

<template>
  <div class="contact-info">
    <h3 class="title">INFORMACIÓN DE CONTACTO</h3>
    <div class="info-section">
      <div class="info-item">
        <h6>🏠 Dirección</h6>
        <p>Vélez km 7 vía Chipatá, Chipatá, Colombia, 057</p>
      </div>
      <div class="info-item">
        <h6>📲 Celular</h6>
        <p>314 7710906 Celular</p>
      </div>
      <div class="info-item">
        <h6>💌 Gmail</h6>
        <p>hotelranchotrespotrillos@gmail.com</p>
      </div>
    </div>

    <h3 class="title">INFORMACIÓN BÁSICA</h3>
    <div class="info-section">
      <div class="info-item">
        <h6>⭐ Calificación</h6>
        <p>4.4 (80 opiniones)</p>
      </div>
      <div class="info-item">
        <h6>🕓 Horario</h6>
        <p>Siempre abierto</p>
      </div>
      <div class="info-item">
        <h6>💰 Rango de precios</h6>
        <p>Establecido por el cliente</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo'
}
</script>

<style scoped>
.contact-info {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  font-weight: bold;
}

.info-section {
  margin-bottom: 20px;
}

.info-item {
  margin-bottom: 15px;
}

.info-item h6 {
  font-size: 18px;
  color: #555;
  margin-bottom: 5px;
}

.info-item p {
  font-size: 16px;
  color: #777;
  margin: 0;
}
</style>