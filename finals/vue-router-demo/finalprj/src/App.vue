<template>
  <div id="app" :style=" {backgroundImage: `url${background}`}">
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img :src="logo" class="logo-tiny">
          Silly Cats
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
          aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home
                <span class="visually-hidden">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/gallery">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-sm-2" type="search" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <router-link class="nav-link active" to="/">    
      <img :src="logo" class="logo">
    </router-link>
    <router-view/>
    <footer class="mt-5">
      {{footer}}
    </footer>
  </div>
</template>

<script>
import logo from '@/assets/icon.png';
import bg from '@/assets/bg-noise.png';
export default {
  name: 'App',
  data(){
    return {
      footer: 'Created by June Sarah Quiambao',
      logo: logo,
      background: bg
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
  color: #b67352;
}
.logo {
  width: 200px;
  margin: 0;
}
.logo-tiny {
  width: 50px;
}

</style>
