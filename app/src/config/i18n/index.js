import i18next from 'i18next';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      posts: {
        title: 'Post List',
      },
      users: {
        title: 'User List',
      },
    },
  },
  initImmediate: false,
});
