<template>
  <div>
    <custom-header></custom-header>
    <div class="container">
      <form>
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="text">Nom Prénom</label>
              <input type="text" class="form-control" id="text" placeholder="Jean Dupont" required v-model="text">
            </div>
          </div>

          <div class="col-6">
            <div class="form-group">
              <label for="select1">Spécialité</label>
              <select class="form-control" id="select1" v-model="select1">
                <option value="Informatique">Informatique</option>
                <option value="Electronique">Electronique</option>
                <option value="Sciences">Siences</option>
                <option value="Mécanique">Mécanique</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="select2">Année</label>
              <select multiple class="form-control" id="select2" v-model="select2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="textarea">Description</label>
              <textarea class="form-control" id="textarea" rows="3" v-model="textarea"></textarea>
            </div>
          </div>
        </div>
      </form>

      <button type="button" class="btn btn-light" @click="btnClick">Try it</button>

      <p id="write_text">{{m_text}}</p>
      <p id="write_select1">{{m_select1}}</p>
      <p id="write_select2">{{m_select2}}</p>
      <p id="write_textarea">{{m_textarea}}</p>
    </div>
  </div>
</template>

<script>
  import CustomHeader from './Header'

  export default {
    name: "Form",
    components: {CustomHeader},
    data: function() {
      return {
        text: "",
        select1: "",
        select2: [],
        textarea: "",
        m_text: "",
        m_select1: "",
        m_select2: "",
        m_textarea: "",

      }
    },
    methods: {
      btnClick: function() {
        this.m_text = `Nom Prénom : ${this.text}`
        this.m_select1 = `Spécialité : ${this.select1}`
        this.m_select2 = `Année : ${this.select2}`
        this.m_textarea = `Description : ${this.textarea}`
      }
    }
  }
</script>

<style scoped>

</style>