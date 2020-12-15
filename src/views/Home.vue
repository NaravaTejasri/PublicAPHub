<template>
 <b-container-fluid class='home-page' max-width='100%'>
   <b-row>
     <b-col>
      <div class='banner'>
          <h1>Public API HUB</h1>
          <p>A place of public APIs.</p>
      </div>
      </b-col>
    </b-row>
    <h2>List Of Public API's</h2>
    <b-row class='main-content'>
      <b-progress :value="70" class="mb-3" :max="100" v-if="apilists===[]" show-progress animated></b-progress>
      <b-col md='2'>
        <b-row class='justify-content-center'>
          <b-label id='sort'><b-strong>Sort By</b-strong></b-label>
        </b-row>
        <b-row class='justify-content-center'>
        <div class='dropdown'>
          <b-form-select v-model='sortOption' class='mb-3' style='border-radius:20%;'>
            <b-form-select-option value='all'>All</b-form-select-option >
            <b-form-select-option value='Name'>Name</b-form-select-option >
            <b-form-select-option value='Description'>Description</b-form-select-option >
          </b-form-select>
        </div>
        </b-row>
      </b-col>
      <b-col md='8' >
        <b-row v-for='(list, index) in returnApiList' :key='index' style="width: relative" class='justify-content-center' align-v="start">
        <b-nav-item
          :to='{ name: "Details", params: { title: list.API } }'
          class='api-preview'
          style="list-style-type: none;"
        >
          <b-card  style="max-height: 20rem;border-radius:20%;">
            <b-row class='justify-content-center'>
            <p-header>API Name: {{ list.API }}</p-header>
            </b-row>
            <b-row class='justify-content-center'>
            <b-form>API Description: {{ list.Description }}</b-form>
            </b-row>
          </b-card>
        </b-nav-item>
      </b-row>
      </b-col>
      </b-row>
      <b-row class="pagignation-container">
    <pagination id='button-list' class='ml-auto' style='width: 200px;'>
      <button id='previous' type='button' v-if='page != 1' @click='page--'>
        &#8249;&#8249;
      </button>
      <button
        id='pagination'
        type='button'
        v-for='pageNumber in pages.slice(page - 1, page + 1)'
        :key='pageNumber'
        @click='page = pageNumber'
      >
        {{ pageNumber }}
      </button>
      <button
        id='next'
        type='button'
        @click='page++'
        v-if='page < pages.length'
      >
        &#8250;&#8250;
      </button>
    </pagination>
    </b-row>
  </b-container-fluid>
</template>

<script lang='ts'>
import { getAnimalsEntries } from '@/store/api'
import { Entrie, HomePageData } from '@/store/models'
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data: (): HomePageData => {
    return {
      apilists: [],
      sortOption: 'all',
      page: 1,
      perPage: 10,
      pages: []
    }
  },
  created () {
    getAnimalsEntries((response: Entrie[]) => {
      this.apilists = response
    })
  },
  methods: {
    setPages () {
      const numberOfPages = Math.ceil(this.apilists.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate (apilists: Entrie[]) {
      const page = this.page
      const perPage = this.perPage
      const from = page * perPage - perPage
      const to = page * perPage
      return apilists.slice(from, to)
    }
  },
  watch: {
    apilists () {
      this.setPages()
    }
  },
  computed: {
    returnApiList (): Entrie[] {
      if (this.sortOption === 'Name') {
        return this.paginate(
          this.apilists
            .slice()
            .sort((a, b) => (a.API > b.API ? 1 : a.API < b.API ? -1 : 0))
        )
      } else if (this.sortOption === 'Description') {
        return this.paginate(
          this.apilists
            .slice()
            .sort((a, b) =>
              a.Description > b.Description
                ? 1
                : a.Description < b.Description
                  ? -1
                  : 0
            )
        )
      } else {
        return this.paginate(this.apilists)
      }
    }
  }
})
</script>
