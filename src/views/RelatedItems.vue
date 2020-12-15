<template>
  <b-container-fluid class='relatedItems'>
    <b-row class='justify-content-center mt-5'>
      <h3>RelatedAPIs</h3>
    </b-row>
    <b-row class='justify-content-center'>
    <b-card
    title="API Name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-fluid
    img-top
    style="max-width: 15rem;max-height:15rem;border-radius:20%;"
    class="mb-2 mr-3"
    v-for='(list, index) in relatedApiLists'
    :key='index'
  >
    <b-card-text>
      {{ list.API }}
    </b-card-text>
    </b-card>
    </b-row>
  </b-container-fluid>
</template>

<script lang='ts'>
import { getRelatedItems } from '@/store/api'
import Vue from 'vue'
import { Entrie, RelatedItemsData } from '@/store/models'

export default Vue.extend({
  name: 'RelatedItems',
  data: (): RelatedItemsData => {
    return {
      relatedApiLists: [],
      name: '',
      description: '',
      relatedApiListsSize: 3
    }
  },
  created () {
    getRelatedItems(response => {
      const randomApi: Entrie = response.splice(Math.random() * (response.length - 1), 1).pop()!
      while (this.relatedApiLists.length < this.relatedApiListsSize) {
        this.relatedApiLists.push(randomApi)
      }
    })
  }
})
</script>
