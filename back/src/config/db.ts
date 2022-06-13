import { Dialect, Sequelize } from 'sequelize'

/* Creating a connection to the database. */
const dbName = 'project' as string
const dbUser = 'root' as string
const dbHost = '127.0.0.1'
const dbDriver = 'mysql' as Dialect
const dbPassword = '12345'

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

sequelizeConnection.authenticate()

export default sequelizeConnection;
