import * as Sequelize from 'sequelize'

export interface UserAddModel {
    id?: number
    name: string
    email: string
    password: string
    type_document?: string
    document?: string
    date_birth?: string
    blood_type?: string
    health_habits?: string
    congenitals_defects?: string
    medical_conditions?: string
    eps?: string
    responsible_home?: string
    gender?: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
    id: number
    name: string
    email: string
    password: string
    type_document?: string
    document?: string
    date_birth?: string
    blood_type?: string
    health_habits?: string
    congenitals_defects?: string
    medical_conditions?: string
    eps?: string
    responsible_home?: string
    gender?: string
    created_at: string
    updated_at: string
}

export interface UserViewModel {
    id: number
    name: string
    email: string
}


export interface UserInput extends Sequelize.Optional<UserModel, 'id'> {}
export interface UserOuput extends Required<UserModel> {}