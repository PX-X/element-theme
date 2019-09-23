<template>
  <p id="app">
    <component :is="currentView"></component>
    <button @click="changeView('A')">切换到A</button>
    <button @click="changeView('B')">切换到B</button>
    <button @click="changeView('C')">切换到C</button>
  </p>
</template>

<script>
export default {
  data () {
    return {
      currentView: 'comA'
    }
  },
  methods: {
    changeView: function (val) {
      this.currentView = 'com' + val// 动态地改变currentView的值就可以动态挂载组件了。
    }
  },
  components: {
    comA: {
      template: '<p>组件A</p>'
    },
    comB: {
      template: '<p>组件B</p>'
    },
    comC: {
      template: '<p>组件C</p>'
    }
  }
}

</script>
