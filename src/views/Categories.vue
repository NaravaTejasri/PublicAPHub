<template>
  <b-container class='categories-page'>
      <b-row class='justify-content-center'>
        <h2>List Of Categories</h2>
      </b-row>
      <b-row v-for='(list, index) in displayedCategoryList'
          :key='index' class='justify-content-center' cols='2' >
        <b-card style="max-width: 30rem;border-radius:15%;" class='mb-3'>
            {{ list }}
        </b-card>
      </b-row>
    <div id='button-list' class='ml-auto' style='width: 200px;'>
      <button id='pagination' type='button' v-if='page != 1' @click='page--'>
        &#8249;&#8249;
      </button>
      <button
        id='previous'
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
    </div>
    </b-container>
</template>

<script lang='ts'>
import { getCategories } from '@/store/api'
import { CategoriesPageData } from '@/store/models'
import Vue from 'vue'

export default Vue.extend({
  name: 'Categories',
  data: (): CategoriesPageData => {
    return {
      apiCategorylist: [],
      page: 1,
      perPage: 10,
      pages: []
    }
  },
  created () {
    getCategories(response => {
      this.apiCategorylist = response
    })
  },
  methods: {
    setPages () {
      const numberOfPages = Math.ceil(
        this.apiCategorylist.length / this.perPage
      )
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate (apiCategorylist: string[]) {
      const page = this.page
      const perPage = this.perPage
      const from = page * perPage - perPage
      const to = page * perPage
      return apiCategorylist.slice(from, to)
    }
  },
  watch: {
    apiCategorylist () {
      this.setPages()
    }
  },
  computed: {
    displayedCategoryList (): string[] {
      return this.paginate(this.apiCategorylist)
    }
  }
})
</script>
