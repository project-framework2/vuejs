<template>
  <div>
    <custom-header></custom-header>

    <div class="container mt-3">
      <carousel-comp :pictures="pictures"></carousel-comp>
    </div>
  </div>
</template>

<script>
  import CustomHeader from "../components/Header"
  import CarouselComp from "../components/CarouselComp"

  export default {
    name: "Carousel",
    components: {CustomHeader, CarouselComp},
    data: function() {
      return {
        pictures: [
          {src: require("@/assets/pictures/paris.jpg"), title: "Paris", desc: "..."},
          {src: require("@/assets/pictures/athenes.jpg"), title: "Athenes", desc: "..."},
          {src: require("@/assets/pictures/londres.jpg"), title: "Londres", desc: "..."},
          {src: require("@/assets/pictures/hong-kong.jpg"), title: "Hong-Kong", desc: "..."},
          {src: require("@/assets/pictures/tokyo.jpg"), title: "Tokyo", desc: "..."},          
        ]
      }
    }
  }
</script>

<style scoped>

</style>