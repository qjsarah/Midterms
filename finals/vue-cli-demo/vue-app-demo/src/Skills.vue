<template>
  <div id="about-us">
    <div id="todo-card">
      <div class="container">
        <div class="alert alert-primary" role="alert">
          <h1>{{ msg6 }}</h1><br>
          <h3>{{headings[0]}}</h3>
          <ul class="text-left">
            <li>{{technical[0]}}</li>
            <li>{{technical[1]}}</li>
            <li>{{technical[2]}}</li>
            <li>{{technical[3]}}</li>
          </ul>
          <h3>{{ headings[1] }}</h3>
          <ul class="text-left">
            <li>{{personal[0]}}</li>
            <li>{{personal[1]}}</li>
            <li>{{personal[2]}}</li>
            <li>{{personal[3]}}</li>
            <li>{{personal[4]}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
      msg6: 'Skills',
      headings: [
        'Technical Skills',
        'Personal Skills'
      ],
      technical: [
        'Network troubleshooting',
        'Languages (Java, Python, HTML, CSS, PHP, JavaScript)',
        'Microsoft Office (MS Word, Excel, PowerPoint, etc.)',
        'Creatives (Clip Studio Paint, Adobe Illustrator, Adobe Photoshop)'
      ],
      personal: [
        'Hardworking',
        'Creative',
        'Fast Learner',
        'Reliable',
        'Disciplined'
      ]
    }
  }
}
</script>

<style>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

li {
  padding: 5px 0;
}

a {
  color: #42b983;
}
</style>
