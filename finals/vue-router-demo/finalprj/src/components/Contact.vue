<template>
  <div class="contact container">
    <h1>{{title}}</h1>
    <h3>{{content}}</h3>
    <div class="mt-5 d-flex contact-content container">
      <img :src="profileimg" alt="">
      <div class="contact-details d-flex flex-column">
        <div v-for="(detail, index) in contactdetails" :key="index" >
          <h4>{{detail}}</h4>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact Us',
      content: 'Got a question? send us a message!',
      profileimg: 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/461833476_566061369201511_571597147666377142_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jXMB9w1TIpIQ7kNvgEQtOx2&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=AyZzK9QyH5kTjdeO7bxZwC_&oh=00_AYAfNLWkSLEbpthl95m5MTj33sBC994X6U1CVCwkT-WuLA&oe=6701A3AE',

      contactdetails: [
        'Email: qjsarah@gmail.com', 'Phone: 09150990443', 'GitHub: https://github.com/qjsarah'
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
h3 {
  font-style: italic;
}
img {
  width: 250px;
  border-radius: 50%;
}
.contact-details {
  margin: auto 5%;
  text-align: left;
}
h4 {
  font-size: 1.2em;
  font-weight: bold;
}
.contact-content {
  width: 50%;
}
</style>
