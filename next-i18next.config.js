module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeDetection: false,
  },
  // react: { useSuspense: false },
  debug: process.env.NODE_ENV === 'production' ? false : true,
};
