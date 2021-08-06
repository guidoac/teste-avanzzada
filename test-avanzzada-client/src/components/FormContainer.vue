<template>
  <div class="form-container">
    <service-form
      v-if="!userForm"
      :service-fields="apiFields.request_fields"
      :service-data="serviceData"
      @goto-user-form="userForm = true"
    />
    <user-form
      v-if="userForm"
      :user-fields="apiFields.user_fields"
      :user-data="userData"
      @backto-service-form="userForm = false"
    />
  </div>
</template>

<script>
import UserForm from './UserForm'
import ServiceForm from './ServiceForm'

const config = require('../config/api-config.json')
const axios = require('axios').default

export default {
  name: 'FormContainer',
  components: {
    UserForm,
    ServiceForm
  },
  data () {
    return {
      apiFields: {},
      serviceData: {},
      userData: {},
      userForm: false
    }
  },
  async beforeMount () {
    let fullUrl = `${config.server}${config.endpoints.fieldsEndpoint}`
    let res = await axios.get(fullUrl)

    this.apiFields = res.data
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
  .form-container {
    width: 30%;
    background-color: #fff399;
    border: 2px solid black;
    box-shadow: 2px;
    border-radius: 1rem;
    padding: 4rem 6rem;
  }
</style>
