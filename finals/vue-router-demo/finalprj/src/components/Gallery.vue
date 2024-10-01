<template>
  <div class="gallery container">
    <h1>{{title}}</h1>
    <p>{{content}}</p>
    <div class="d-flex mt-5 gallery-container">
      <div v-for="(img, index) in row1images" :key="index" class="">
        <img :src="img" alt="silly cats">
      </div>
    </div>
    <div class=" d-flex mt-5 big-img">
      <div v-for="(img, index) in row2images" :key="index" class="">
        <img :src="img" alt="silly cats">
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      title: 'Gallery',
      content: 'Browse our collection of silly ferals.',
      row1images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKftWrM07KsI01ZixsgBmKqJmIfQtwrkONcg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYPS9xk3SB4TqUiIwBuhUmgKM4JKl8RZ9XQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnK3wZ2Sw1plPyiPHqzMDK40Z3vk7pLWaew&s',
      ],
      row2images: [
        'https://i.pinimg.com/736x/4c/62/3b/4c623b6b9bb99cbe7644f13f96582056.jpg',
        'https://i.ytimg.com/vi/f-e9hSUSlSM/maxresdefault.jpg',
        'https://i.pinimg.com/originals/b3/ee/c0/b3eec03459b57860fe1f898b7584683b.jpg'
      
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
.gallery-container, .big-img {
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
}
.big-img img {
  width: 300px;
  height: auto;
}
</style>
