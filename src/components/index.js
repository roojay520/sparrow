import SvgIcon from '@/components/SvgIcon';
import TheNav from '@/components/TheNav';

const components = {
  SvgIcon,
  TheNav,
};

export default (Vue) => Object.keys(components).forEach((key) => Vue.component(key, components[key]));

