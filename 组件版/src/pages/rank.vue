<template>
  <div id="rank">
    <h3>排名</h3>
    {{ msg }}
  </div>
</template>

<script>
  
  export default {
    computed: {
      msg() {
        return this.$store.state.msg
      }
    }
  }
</script>