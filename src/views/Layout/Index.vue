<template>
  <div class="wrap">
    <the-nav :nav="nav"></the-nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          name: '首页',
          link: '/home',
        },
        {
          name: '测试',
          link: '/test',
        },
      ],
    };
  },
};
</script>
