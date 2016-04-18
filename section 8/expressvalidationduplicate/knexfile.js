module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/knex-people',
    pool: {
      min: 2,
      max: 10
    }
  }
};

// looks in your development environment and then searches local host for your postgresql data base called knex-people. 
//Where knex looks for your data-base
