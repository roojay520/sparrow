<template>
  <div class="nav-wrap">
    <router-link
      v-for="(v, i) of theNav"
      :key="i" :to="v.link">
      {{v.name}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'the-nav',
  props: {
    nav: {
      type: Array,
      required: true,
    },
  },
  computed: {
    theNav() {
      if (this.nav.length) return this.nav.filter(x => x.name);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/index';

.nav-wrap {
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  background-color: $clr-white;
  align-items: center;
  transition: all .3s ease;
  box-shadow: $shadow-nav;
   a {
      display: inline-block;
      text-align: center;
      color: $clr-black;
      text-decoration: none;
      font-size: 1rem;
      line-height: 56px;
      padding: 0 .5rem;
      margin: 0 2rem;
      border-bottom: solid .1rem transparent;
      &:hover{
        color: $clr-main;
      }
      &.active{
        color: $clr-main;
        border-bottom-color: $clr-main;
      }
    }
}
</style>
