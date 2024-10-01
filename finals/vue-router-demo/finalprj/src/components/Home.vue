<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <p>{{ contentText }}</p>
    <div class="d-flex justify-content-between mt-5">
      <div v-for="(img, index) in image" :key="index" class="">
        <img :src="img" alt="silly cats">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Silly Cats',
      contentText: 'An out of this world experience with the sillies (cats).',
      image: [
        'https://i.pinimg.com/originals/3f/c4/b7/3fc4b75708b9169a2834e90873234d87.jpg',
        'https://i.pinimg.com/736x/40/aa/68/40aa68a091d115acfebcf602bb2cc59f.jpg',
        'https://external-preview.redd.it/Nf7m3e2pn5YwQF5VDwbU2PmoFwrQ4ad9cZNqZ7UPHfE.png?auto=webp&s=715c3787b37ac54e5d7b9435bfaf7cfb3902b8b6',
        'https://avatars.githubusercontent.com/u/66517997?v=4?s=400'
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
</style>
