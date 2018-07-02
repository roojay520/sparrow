<template>
  <div>
    <h1>{{msg}}
      <el-button size="small" @click="test()">
        <svg-icon color="#2d8cf0" icon="user"/>测试</el-button>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '测试内容!',
    };
  },
  methods: {
    test() {
      this.$message.success('测试消息!');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
