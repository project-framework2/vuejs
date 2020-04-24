<template>
  <div>
    <custom-header></custom-header>

    <div class="container mt-3">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="10000" style="width: 60%; margin: auto;">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="@/assets/pictures/paris.jpg" alt="Paris">
            <div class="carousel-caption d-none d-md-block">
              <h5>Paris</h5>
              <p>...</p>
            </div>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/pictures/athenes.jpg" alt="Athènes">
            <div class="carousel-caption d-none d-md-block">
              <h5>Athènes</h5>
              <p>...</p>
            </div>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/pictures/londres.jpg" alt="Londres">
            <div class="carousel-caption d-none d-md-block">
              <h5>Londres</h5>
              <p>...</p>
            </div>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/pictures/hong-kong.jpg" alt="Hong Kong">
            <div class="carousel-caption d-none d-md-block">
              <h5>Hong Kong</h5>
              <p>...</p>
            </div>
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/pictures/tokyo.jpg" alt="Tokyo">
            <div class="carousel-caption d-none d-md-block">
              <h5>Tokyo</h5>
              <p>...</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomHeader from "./Header";

  export default {
    name: "Carousel",
    components: {CustomHeader}
  }
</script>

<style scoped>

</style>