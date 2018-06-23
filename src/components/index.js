import SvgIcon from '@/components/SvgIcon';

const components = {
  SvgIcon,
};

export default (Vue) => Object.keys(components).forEach((key) => Vue.component(key, components[key]));

