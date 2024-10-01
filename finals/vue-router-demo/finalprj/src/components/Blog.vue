<template>
  <div class="blog container">
    <h1>{{title}}</h1>
    <p>{{content}}</p>
    <div class="d-flex container blog-container mt-5">
      <img :src="images[0]" alt="silly cat 1">
      <h3 class="text-justify">{{contentCaption[0]}}</h3>
    </div>
    <div class="d-flex container blog-container mt-5">
      <h3 class="text-justify">{{contentCaption[0]}}</h3>
      <img :src="images[1]" alt="silly cat 1">
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      title: 'Silly Blog',
      content: 'Here are the recent activities and stories of our feral silly cats.',
      images: [
        'https://i.pinimg.com/originals/3f/c4/b7/3fc4b75708b9169a2834e90873234d87.jpg',
        'https://external-preview.redd.it/Nf7m3e2pn5YwQF5VDwbU2PmoFwrQ4ad9cZNqZ7UPHfE.png?auto=webp&s=715c3787b37ac54e5d7b9435bfaf7cfb3902b8b6'
      ],
      contentCaption: [
        'This is ben. Ben is a menace of an orange cat. He has all the energy and restlessness of a wild rabbit. If someone were to help tidy up the fur on his head and chest that has been messed up by running around everywhere, Ben would certainly be most greateful.'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 300px;
}
.text-justify {
  text-align: justify;
  margin: 0 3%;
}
.blog-container {
  justify-content: space-between;
  width: 70%;
}
</style>
