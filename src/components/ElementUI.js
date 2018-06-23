import Vue from 'vue';
import {
  Form,
  FormItem,
  Button,
  Message,
} from 'element-ui';

Vue.prototype.$message = Message;

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
