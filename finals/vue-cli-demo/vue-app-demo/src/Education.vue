<template>
  <div id="about-us">
    <div id="todo-card">
      <div class="container">
        <div class="alert alert-primary" role="alert">
          <h2>{{ msg6 }}</h2><br>
          <h3>{{ headings[0] }}</h3>
          <p>{{course}}</p>
          <h3>{{ headings[1] }}</h3>
          <p>{{ careerText }}</p>
          <h3>{{ headings[2] }}</h3>
          <p>{{ volunteerText[0] }} <br> {{volunteerText[1]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'education',
  data () {
    return {
      msg6: 'Education',
      headings: [
        'Holy Angel University | 2022 - Present',
        'Career Objective',
        'Volunteer Work'
      ],
      course: 'Bachelor of Science in Information Technology Major in Web Development',
      careerText: 'Seeking a challenge, knowledge, and a fruitful experience with a progressive organization that provides an opportunity to capitalize my skills and abilities in the field of IT.',
      volunteerText: [
        'Thumbnail Creator: of streamers and vtubers (2021-2023)',
        'Graphics Designer: of Raya mini Grocery (2022-2023)'
      ]
    }
  }
}
</script>

<style>
  #about-us{
    width: 70%;
  }
</style>