<template>
  <b-container-fluid class='sitemap-page'>
          <b-row id='main-content-header' class='justify-content-center mt-5'>
          <b-col>
            <h2>Sitemap</h2>
          </b-col>
          </b-row>
          <b-row id='main-content' class='justify-content-center mt-3'>
                <b-card  style="border-radius:100%;" cols='2'>
                    <h6>Home Page Navigation</h6>
                    <b-nav-item
                        :to='{ name: "Home" }'
                        style="list-style-type: none;">
                        home
                     </b-nav-item>
                </b-card>
                 <b-card  style="border-radius:100%;" class='ml-2 mr-2' cols='2'>
                    <h6>Random Page Navigation</h6>
                    <b-nav-item
                        :to='{ name: "Random" }'
                        style="list-style-type: none;">
                random
                    </b-nav-item>
                </b-card>
                <b-card  style="border-radius:100%;" cols='2'>
                    <h6>Categories Page Navigation</h6>
                    <b-nav-item
                        :to='{ name: "Categories" }'
                        style="list-style-type: none;">
                            Categories
                    </b-nav-item>
                </b-card>
          </b-row>
  </b-container-fluid>
</template>
