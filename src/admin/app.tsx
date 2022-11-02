
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
        "HomePage.welcome.congrats.content": "You are logged in as the first administrator. To discover the powerful features provided by Prodkt,",
        "HomePage.welcome.congrats.content.bold": "we recommend you to create your first Application Serivce.",
        'app.components.HomePage.welcomeBlock.content': 'A CMS suite for Prodkt applications that will extend with it valid REST and GraphQL APIs.',
        'app.components.HomePage.welcome.again': 'Welcome to Prodkt',
        'app.components.BlockLink.tutorial.content': 'Follow step-by-step instructions to use and customize a Prodkt application',
        'app.components.HomePage.welcome': 'Welcome to Prodkt',
        'app.components.LeftMenu.plugins': 'Prodkt Plugins',
        'app.components.LeftMenuLinkContainer.plugins': 'Prodkt Plugins',
        'global.plugins': 'Prodkt Plugins',
        'admin.pages.MarketPlacePage.tab-group.label': 'Plugins and Providers for Prodkt',
        'admin.pages.MarketPlacePage.subtitle': 'Extend Prodkt with plugins and providers',
        'global.marketplace': 'Prodkt App Store',
        'global.content-manager': 'Frontend Content',
        'content-manager.HeaderLayout.button.label-add-entry': 'Create New Content',
        'content-manager.models': 'Application Services',
        'content-manager.models.numbered': 'Application Services {number}',
        'app.components.LeftMenuLinkContainer.collectionTypes': 'Application Services',
        'app.components.LeftMenuLinkContainer.collectionTypes.numbered': 'Application Services {number}',
        'app.components.LeftMenuLinkContainer.singleTypes': 'Application Services',
        'content-manager.components.LeftMenu.collection-types': 'Application Services',
        'content-manager.containers.SettingsPage.Block.contentType.title': 'Application Services',
        'content-manager.containers.SettingsPage.Block.generalSettings.description': 'Configure the default options for your Application Services',
        "app.components.GuidedTour.CTB.create.content": "<p>Application Services help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>",
        "app.components.GuidedTour.CTB.create.cta.title": "Build a Application Service",
        "app.components.GuidedTour.CTB.create.title": "🧠 Create a first Application Service",
        "content-manager.plugin.name": "Frontend Content",
        "Content Type Builder": "Application Service Builder",
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
