<template>
  <nav>
    <ul>
      <li>
        <PrismicLink :field="response?.data.home_link">Home</PrismicLink>
      </li>
      <li>
        <PrismicLink :field="response?.data.first_article">Lorem Ipsum</PrismicLink>
      </li>
      <li>
        <PrismicLink :field="response?.data.second_article">Sed Ut</PrismicLink>
      </li>
      <li>
        <PrismicLink :field="response?.data.third_article">At Vero</PrismicLink>
      </li>
    </ul>
  </nav>
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
      const response = await this.$prismic.client.getSingle('navigation')
      this.response = response
    }
  },
  created() {
    this.getContent()
  }
}
</script>
