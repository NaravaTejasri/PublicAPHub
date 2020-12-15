<template>
<div id='app'>
  <AppNavBar></AppNavBar>
  <router-view></router-view>
  <AppFooter></AppFooter>
</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import AppFooter from '@/components/AppFooter.vue'
import AppNavBar from '@/components/AppNavBar.vue'

@Component({
  components: {
    AppFooter,
    AppNavBar
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import url("//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic");

#app {
  font-family:'titillium web','sans-serif';
}
</style>
