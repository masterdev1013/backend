module.exports = {
    apps : [{
      name: 'serve-data-dev',
      script: 'dist/main.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        STAGE: 'dev',
        APP_PORT: 4000,
        CURRENT_SCHEMA_VERSION: '1.0.1',
        RESET_PASSWORD_URL: 'http://localhost:4000',
        RESET_PASSWORD_CONFIRMATION_REDIRECT_URL: 'http://localhost:4000/user-confirmed',
        RESET_PASSWORD_UNAUTH_CONFIRMATION_REDIRECT_URL: 'http://localhost:4000/user-unauthorized'
      }
    }],
  
    deploy : {
      production : {
        user : 'node',
        host : '127.0.0.1',
        ref  : 'origin/main',
        repo : 'git@gitlab.4dfun.io:web/user-profile-backend.git',
        path : '/home/ubuntu/user-profile-backend',
        'post-deploy' : 'npm install && npm build && pm2 reload ecosystem.config.js --env dev'
      }
    }
  };