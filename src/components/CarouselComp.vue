<template>
	<div>
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="10000" style="width: 60%; margin: auto;">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" v-for="index in pictures.length" :data-slide-to="index-1" :key="index" :class="{active: index === 1}"></li>
      </ol>
      <div class="carousel-inner">

        <div class="carousel-item" v-for="(pic, index) in pictures" :key="index" :class="{active: index === 0}">
          <img class="d-block w-100" :src="pic.src" :alt="pic.title">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{pic.title}}</h5>
            <p>{{pic.desc}}</p>
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
</template>

<script>
	export default {
    name: "CarouselComp",
    props: {
      pictures: Array
    }
  }
</script>

<style scoped>

</style>