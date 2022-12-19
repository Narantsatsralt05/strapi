module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: `https://api.vercel.com/v1/integrations/deploy/prj_${process.env.VERCEL_DEPLOY_PLUGIN_HOOK}`,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      roles: ["strapi-super-admin"],
    },
  },
});
