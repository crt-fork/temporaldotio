module.exports = {
  reactStrictMode: false,
  env: {
    MAIL_CHIMP_HOST: process.env.MAIL_CHIMP_HOST,
    MAIL_CHIMP_USER: process.env.MAIL_CHIMP_USER,
    MAIL_CHIMP_ID: process.env.MAIL_CHIMP_ID
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
}
