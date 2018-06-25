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
$red: #e86568;
$black: #222;
.nav-wrap {
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  transition: all .3s ease;
  box-shadow: 0 0 4px 0 rgba(0,0,0,.01), 0 4px 4px 0 rgba(0,0,0,.04);
   a {
      display: inline-block;
      text-align: center;
      color: $black;
      text-decoration: none;
      font-size: 1rem;
      line-height: 56px;
      padding: 0 .5rem;
      margin: 0 2rem;
      border-bottom: solid .1rem transparent;
      &:hover{
        color: $red;
      }
      &.active{
        color: $red;
        border-bottom-color: $red;
      }
    }
}
</style>
