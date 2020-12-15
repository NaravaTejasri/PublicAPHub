<template>
  <b-container-fluid class='detail-page' max-width='100%'>
          <b-row id='main-content-header' class='justify-content-center'>
          <b-col>
            <h2>Details of selected API</h2>
          </b-col>
          </b-row>
          <b-row id='main-content' class='justify-content-center'>
              <b-card  style="min-width: 20rem;border-radius:20%;" cols='6'>
                    <h4><strong> Name:</strong> {{ name }}</h4>
                    <p>API Description: {{ description }}</p>
                    <p>Category: {{ category }}</p>
                    <p>Auth: {{ auth }}</p>
                    <p>HTTPS: {{ https }}</p>
                    <p>Cors: {{ cors }}</p>
                    <p>Link: {{ link }}</p>
                </b-card>
          </b-row>
          <b-row class='justify-content-center' >
            <RelatedItems></RelatedItems>
          </b-row>
  </b-container-fluid>
</template>
<script lang='ts'>
import { getDetailsApi } from '@/store/api'
import { DetailsPageData } from '@/store/models'
import RelatedItems from '@/views/RelatedItems.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'Details',
  props: ['title'],
  components: {
    RelatedItems
  },
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
    getDetailsApi(this.title, response => {
      this.name = response.API
      this.description = response.Description
      this.category = response.Category
      this.auth = response.Auth
      this.cors = response.Cors
      this.https = response.HTTPS
      this.link = response.Link
    })
  }
})
</script>
