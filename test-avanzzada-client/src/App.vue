<template>
  <div id="app">
    <div class="page-wrapper">
      <form-container />
    </div>
  </div>
</template>

<script>
import FormContainer from './components/FormContainer'

export default {
  name: 'App',
  components: {
    FormContainer
  }
}
</script>

<style scoped>
 #app {
    height: 100vh;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  }

  .page-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
