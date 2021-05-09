import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const themes = {
  light: {
    primary: '#3f51b5',
  },
};

export default new Vuetify({
  theme: {themes},
  icons: {
    iconfont: 'mdi',
  },
});
