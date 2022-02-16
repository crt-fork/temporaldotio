module.exports = {
  reactStrictMode: false,
  async rewrites() {
    return [{
      source: '/',
      destination: '/home'
    }]
  },
  async redirects() {
    return [
      {
        "source": "/careers",
        "destination": "https://jobs.lever.co/temporal",
        "permanent": false
      },
      {
        "source": "/youtube",
        "destination": "https://www.youtube.com/channel/UCGovZyy8OfFPNlNV0i1fI1g",
        "permanent": false
      },
      {
        "source": "/subscribe",
        "destination": "http://eepurl.com/hhcaaX",
        "permanent": false
      },
      {
        "source": "/slack",
        "destination": "https://join.slack.com/t/temporalio/shared_invite/zt-onhti57l-J0bl~Tr7MqSUnIc1upjRkw",
        "permanent": false
      },
      {
        "source": "/assets",
        "destination": "/press",
        "permanent": false
      },
      {
        "source": "/cloud",
        "destination": "https://us17.list-manage.com/survey?u=2334a0f23e55fd1840613755d&id=f1895b6f4a",
        "permanent": false
      },
      {
        "source": "/meetup",
        "destination": "https://lu.ma/temporal",
        "permanent": false
      },
      {
        "source": "/jobs",
        "destination": "/careers",
        "permanent": false
      },
      {
        "source": "/tos",
        "destination": "https://docs.temporal.io/pdf/temporal-tos-2021-07-24.pdf",
        "permanent": false
      },
      {
        "source": "/blog",
        "destination": "https://docs.temporal.io/blog",
        "permanent": false
      },
      {
        "source": "/principles",
        "destination": "https://docs.temporal.io/blog/workflow-engine-principles",
        "permanent": false
      },
      {
        "source": "/go",
        "destination": "https://docs.temporal.io/docs/go/introduction",
        "permanent": false
      },
      {
        "source": "/java",
        "destination": "https://docs.temporal.io/docs/java/introduction",
        "permanent": false
      },
      {
        "source": "/php",
        "destination": "https://docs.temporal.io/docs/php/introduction",
        "permanent": false
      },
      {
        "source": "/node",
        "destination": "https://docs.temporal.io/docs/node/introduction",
        "permanent": false
      },
      {
        "source": "/typescript",
        "destination": "https://docs.temporal.io/docs/typescript/introduction",
        "permanent": false
      },
      {
        "source": "/ts",
        "destination": "https://docs.temporal.io/docs/typescript/introduction",
        "permanent": false
      },
      {
        "source": "/react",
        "destination": "https://www.youtube.com/watch?v=Cxaf8E00GMM",
        "permanent": false
      },
      {
        "source": "/snap",
        "destination": "https://eng.snap.com/build_a_reliable_system_in_a_microservices_world_at_snap",
        "permanent": false
      },
      {
        "source": "/snapchat",
        "destination": "https://eng.snap.com/build_a_reliable_system_in_a_microservices_world_at_snap",
        "permanent": false
      },
      {
        "source": "/stripe",
        "destination": "https://www.youtube.com/watch?v=Crkcr1S-NSc",
        "permanent": false
      },
      {
        "source": "/netflix",
        "destination": "https://www.youtube.com/watch?v=LliBP7YMGyA",
        "permanent": false
      },
      {
        "source": "/datadog",
        "destination": "https://docs.temporal.io/blog/how-datadog-ensures-database-reliability-with-temporal",
        "permanent": false
      },
      {
        "source": "/xstate",
        "destination": "https://youtu.be/GpbOkDjpeYU?t=1616",
        "permanent": false
      },
      {
        "source": "/flightcontrol",
        "destination": "https://youtu.be/mHifpzMn6kA",
        "permanent": false
      },
      {
        "source": "/workshop",
        "destination": "https://lu.ma/temporalintro",
        "permanent": false
      }
    ]
  },
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
