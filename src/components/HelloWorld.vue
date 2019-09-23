<template>
  <div class="hello">
    <!-- change时更新（input失焦时更新），input时不更新 -->
    <input v-model.lazy="msg" @change="show">
    <span>{{msg}}</span>
    <el-button type="primary">kasfdkln</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 123
    }
  },
  methods: {
    show () {
      console.log(this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
</style>
