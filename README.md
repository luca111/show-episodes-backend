# API REST service running on Node.js with Express. Uses Sequelize (ORM) to interact with a Postgres (PostgreSQL) database

# Quick start

Install the dependencies:

```bash
npm install
```

Set up a Postgres database (you need to have a Postgres server):

```bash
createdb dbnameyouwant
```

Change the line 3 of /config/config.js with your username and password for accessing the Postgres server, and the database name. If your Postgres server is listening on a port other than 5432, indicate that port as well.

Do the same for line 5 of populate.js.

Populate the database (populate.js is only used for this):

```bash
node populate.js
```

...and force close it (a more graceful exit should be implemented)

Finally start the server:

```bash
npm start
```

## To do
Make the populate command terminate gracefully.
Eventually use environment variables to connect to the database.

## Credits
TVmaze for TV shows info that you use.
