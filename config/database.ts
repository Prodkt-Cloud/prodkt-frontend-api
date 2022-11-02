export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'tovuti-api'),
      user: env('DATABASE_USERNAME', 'prodkt'),
      password: env('DATABASE_PASSWORD', 'Offencive1!1'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
