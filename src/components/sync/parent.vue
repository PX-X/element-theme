
<template>
  <div class="parent">
    <p>父组件传入子组件的值：{{name}}</p>
    <fieldset>
      <legend>子组件</legend>
      <h1 class="count">{{count}}</h1>
      <child :count.sync="count" :val.sync="name">
      </child>
    </fieldset>
  </div>
</template>

<script>
// 子组件改变父组件传入的值，传给父组件时用.sync
import Child from './son'
export default {
  components: { Child },
  data () {
    return {
      name: 'linda',
      count: 0
    }
  },
  created () {
    console.log(this.count)
  },
  watch: {
    count (newval, oldval) {
      this.count = newval
    }
  }
}
</script>
