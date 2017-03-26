<template>
  <div class="gj-container-map">
    <iframe
      class="gj-container-map__map"
      width="600"
      height="450"
      frameborder="0"
      data-aload="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJA48IKRaZ7kcRMdoesc8TiEk&key=AIzaSyBUehgtBMX5ONy6hjBxsjADtaHECEOaAuY"
      src="javascript:false"
      allowfullscreen></iframe>
  </div>
</template>

<script>
</script>

<style>
.gj-container-map {
  height: 100%;
}

.gj-container-map__map {
  height: 450px;
  width: 100%;
  -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
  transition: filter .3s ease;
}

.gj-container-map__map:hover {
  -webkit-filter: grayscale(0%);
          filter: grayscale(0%);
}
</style>
