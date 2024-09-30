<template>
  <div id="app" class="d-flex justify-content-between container">
    <div>
      <img src="" alt="profile picture">
      <br><br><h2>{{ uname }}</h2>
      <h4 class="text-secondary">{{ msg }}</h4> <br>
      <h2> {{ contactText }} </h2>
      <p class="text-left">{{ contact[0]}} <br> {{ contact[1]}} <br> {{ contact[2]}}</p>
      <h3 class="text-center">{{expertiseHead}}</h3>
      <p class="text-left">{{ expertise[0]}} <br> {{ expertise[1]}} <br> {{ expertise[2]}} <br> {{ expertise[3]}}</p>      
    </div>
    <education></education>
    <skills></skills>
  </div>
</template>

<script>
import Education from './Education.vue'
import Skills from './Skills.vue'
export default {
  name: 'app',
  components: {
    Education,
    Skills
  },
  data () {
    return {
      uname: 'June Sarah Quiambao',
      msg: 'Web Developer',
      contactText: 'Contact Info',
      contact: [
        'Phone: 09150990443',
        'Email: qjunesarah@gmail.com',
        'GitHub: github.com/qjsarah'
      ],
      expertiseHead: 'Expertise',
      expertise: [
        'Front-End Developing',
        'Web Content Writing',
        'Graphic Design',
        'Digital Illustration'
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #42b983;
}

.text-left {
  text-align: left;
}
</style>
