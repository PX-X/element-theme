<template>
  <label class="child">
    输入框：
    <input :value=val @input="$emit('update:val',$event.target.value)" />
    <button @click="clickme">点我{{count}}次</button>
  </label>
</template>
<script>
export default {
  props: ['val', 'count'],
  data () {
    return {
      count1: 1
    }
  },
  methods: {
    clickme () {
      this.count1++
      this.$emit('update:count', this.count1)
    }
  }
}
</script>
