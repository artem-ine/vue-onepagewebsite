<template>
  <div>
    <PrismicRichText :field="response?.data.home_title" />
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
      response: null
    }
  },
  methods: {
    async getContent() {
      const response = await this.$prismic.client.getSingle('home')
      this.response = response
    }
  },
  created() {
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