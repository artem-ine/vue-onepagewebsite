<template>
  <div>
    <PrismicRichText :field="response?.data.homepage" />
    <PrismicImage 
      :field="response?.data.home_image" 
      :imgixParams="{ sat: -30 }"
      class="home-image"
    />
  </div>
</template>

<script>
export default {
  name: 'HomeTest',
  data() {
    return {
      // Initialize "response"
      response: null
    }
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.getSingle('home')
      this.response = response
    }
  },
  created() {
    // Call the API query method
    this.getContent()
  }
}
</script>

<style scoped>
.home-image {
    width: 100%;
    object-fit: cover;
    margin: 2px;
  }

</style>