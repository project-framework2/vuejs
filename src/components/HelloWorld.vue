<template>
  <div>
    <custom-header></custom-header>

    <h1 class="display-4 text-center" >Framework BootStrap</h1>
    <ul class="text-left">
      <li>
        Voici un site fait avec le Framework Bootstrap, il y à plusieurs fenêtres disponibles.
      </li>
      <li>
        Il y à un carrouse avec de très belles photos !
      </li>
      <li>
        Un formulaire basique !
      </li>
      <li>
        La possibilité de se connecter (Pas de backend)
      </li>
    </ul>
  </div>
</template>

<script>
  import CustomHeader from "./Header";

export default {
  name: 'HelloWorld',
  components: {CustomHeader}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
