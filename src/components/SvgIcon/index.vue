<template>
  <svg :class="svgClass" :style="style" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: () => '1.2rem',
    },
    color: {
      type: String,
      required: false,
      default: () => 'currentColor',
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`;
    },
    svgClass() {
      if (this.className) {
        return ` ${this.class}`;
      }
      return 'svg-icon';
    },
    style() {
      return `width:${this.size};
              height:${this.size};
              fill:${this.color};`;
    },
  },
};
</script>
<style>
.svg-icon{
   vertical-align: -0.25rem;
}
</style>
