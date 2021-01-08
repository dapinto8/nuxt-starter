<template>
  <span v-if="false" />
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    keywords: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: 'https://nuxtjs.org/nuxt-card.png'
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.siteUrl + this.path
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
      ]
    };
  }
};
</script>
