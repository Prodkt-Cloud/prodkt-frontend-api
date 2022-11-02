
import AuthLogo from './extensions/prodkt-logo.svg';
import MenuLogo from './extensions/favicon.png';
import favicon from './extensions/favicon.png';

export default {
  config: {
    auth: {
    logo: AuthLogo,
    },
    menu: {
    logo: MenuLogo,
    },
    head: {
      favicon: favicon,
    },
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#ac73e6',
          primary600: '#9736e8',
          primary700: '#8312d1',
          danger700: '#b72b1a'
        },
      },

      // overwrite dark theme properties
      dark: {
         // ...
      }
    },
    // Extend the translations
    translations: {
      en: {
        'Auth.form.email.label': 'Administrator Email',
        'app.components.LeftMenu.navbrand.title': 'Prodkt',
        'Auth.form.button.login.strapi': 'Login with Prodkt',
        'Auth.form.welcome.title': 'Welcome to Prodkt',
        'Auth.form.welcome.subtitle': 'Login to your Prodkt Administrator account',
        'app.components.HomePage.welcomeBlock.content': 'A CMS suite for Prodkt applications that will extend with it valid REST and GraphQL APIs.',
        'app.components.HomePage.welcome.again': 'Welcome to Prodkt',
        'app.components.HomePage.welcome': 'Welcome to Prodkt',
      },
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
    locales: [
      // 'ar',
      'fr',
      // 'cs',
      'de',
      // 'dk',
      'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};
