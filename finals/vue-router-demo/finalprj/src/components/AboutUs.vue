<template>
  <div class="about container">
    <h1>{{title}}</h1>
    <h3>{{content}}</h3>
    <p class="mt-3">{{aboutme}}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      title: 'About Us',
      content: 'To spread positivity through silly little pictures of cats.',
      aboutme: "The purpose of this project is to showcase a collection of cats being silly.Cats truly are mystical and fascinating animals. Us 'Hoomans' have been obsessing over them for more than 6,500 years and guess what, we still are! This website will allow everyone to easily look for various funny and creative images of cats."
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
h3 {
  font-style: italic;
  font-weight: bold;
}
p {
  width: 50%;
  text-align: center;
  margin: 3% auto;
}
</style>
