import * as Sequelize from 'sequelize'
import sequelizeConnection  from '../config/db'
import { UserAddModel, UserModel } from '../interfaces/User.interface'

export const User = sequelizeConnection.define<UserModel, UserAddModel>('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    name:{
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    type_document:{
        type: Sequelize.STRING(5),
        allowNull: true,
    },
    document:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    date_birth:{
        type: Sequelize.DATE,
        allowNull: true,
    },
    blood_type:{
        type: Sequelize.STRING(4),
        allowNull: true,
    },
    health_habits:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    congenitals_defects:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    medical_conditions:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    eps:{
        type: Sequelize.STRING(25),
        allowNull: true,
    },
    responsible_home:{
        type: Sequelize.BOOLEAN,
        allowNull: true,
    },
    gender:{
        type: Sequelize.STRING(20),
        allowNull: true,
    },
    password: Sequelize.STRING
})