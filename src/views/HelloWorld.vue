<template>
  <div>
    <custom-header></custom-header>

    <h1 class="display-4 text-center" >Framework BootStrap (With Vue.Js)</h1>
    <ul class="text-left">
      <li>
        Voici un site fait avec le Framework Bootstrap ainsi que Vue.Js, il y a plusieurs fenêtres disponibles.
      </li>
      <li>
        Il y a un carrousel avec de très belles photos !
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
  import CustomHeader from "../components/Header";

export default {
  name: 'HelloWorld',
  components: {CustomHeader}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
