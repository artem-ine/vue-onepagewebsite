<template>
  <div>
    <PrismicRichText :field="response?.data.title" />
    <PrismicRichText :field="response?.data.description" />
    <PrismicImage 
      :field="response?.data.image" 
      :imgixParams="{ sat: -30 }"
      class="article-image"
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
      const response = await this.$prismic.client.getByUID('article', 'uid')
      this.response = response
    }
  },
  created() {
    this.getContent()
  }
}
</script>

<style scoped>
.article-image {
    width: 100%;
    object-fit: cover;
    margin: 2px;
  }
</style>