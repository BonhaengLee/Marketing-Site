module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26fcb2f967fddff2e9b5cc110830da1a'),
  },
});
