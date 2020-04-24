<template>
  <div>
    <!-- Menu -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="width: 100%;">
      <a class="navbar-brand" href="#">Framework Bootstrap (With Vue.Js)</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Accueil <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/carousel">Carrousel</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/form">Formulaire</router-link>
          </li>
        </ul>
        <!-- Login -->
        <ul class="navbar-nav navbar-right">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle my-2 my-lg-0" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Login
            </a>
            <form class=" dropdown-menu p-4 dropdown-menu-right ">
              <!-- Enter email-->
              <div class="form-inline">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="email@example.com" required v-model="user.mail">
              </div>
              <!-- Enter password-->
              <div class="form-inline">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" required v-model="user.password">
              </div>
              <!-- Remember login-->
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checklogin" v-model="user.remember">
                <label class="form-check-label" for="checklogin">
                  Se souvenir de moi
                </label>
              </div>
              <a class="btn btn-primary" @click="btnClick">Sign in</a>
              <p class="red">{{message}}</p>
            </form>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data: function() {
      return {
        user: {
          mail: "",
          password: "",
          remember: true
        },
        message: ""
      }
    },
    methods: {
      btnClick: function() {
        this.message = `Mail: ${this.user.mail} / Password: ${this.user.password} / Remember: ${this.user.remember}`
      }
    }
  }
</script>

<style scoped>
  .red {
    color: red !important;
  }
</style>