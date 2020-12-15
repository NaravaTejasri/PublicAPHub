<template>
  <b-container-fluid class='random-page'>
     <b-row class='justify-content-center mt-5'>
      <h3>Your Random API</h3>
    </b-row>
    <b-row class='justify-content-center mt-3'>
      <b-card style="border-radius:20%;">
        <b-card-text>API Name<strong> : </strong> {{ name }}</b-card-text>
        <b-card-text>API Description<strong> : </strong> {{ description }}</b-card-text>
        <b-card-text>Category<strong> : </strong> {{ category }}</b-card-text>
        <b-card-text>Auth<strong> : </strong> {{ auth }}</b-card-text>
        <b-card-text>HTTPS<strong> : </strong> {{ https }}</b-card-text>
        <b-card-text>Cors<strong> : </strong> {{ cors }}</b-card-text>
        <b-card-text>Link<strong> : </strong> {{ link }}</b-card-text>
      </b-card>
    </b-row>
    <b-row class='justify-content-center mt-3'>
        <b-button pill id='button' @click='getAnotherRandom'>PICK ANOTHER</b-button>
    </b-row>
  </b-container-fluid>
</template>

<script lang='ts'>
import { getRandomApi } from '@/store/api'
import { DetailsPageData } from '@/store/models'
import Vue from 'vue'

export default Vue.extend({
  name: 'RandomAPI',
  data: (): DetailsPageData => {
    return {
      name: '',
      description: '',
      category: '',
      auth: '',
      cors: '',
      https: false,
      link: ''
    }
  },
  created () {
    getRandomApi(response => {
      this.name = response.API
      this.description = response.Description
      this.category = response.Category
      this.auth = response.Auth
      this.cors = response.Cors
      this.https = response.HTTPS
      this.link = response.Link
    })
  },
  methods: {
    getAnotherRandom () {
      getRandomApi(response => {
        this.name = response.API
        this.description = response.Description
        this.category = response.Category
        this.auth = response.Auth
        this.cors = response.Cors
        this.https = response.HTTPS
        this.link = response.Link
      })
    }
  }
})
</script>
