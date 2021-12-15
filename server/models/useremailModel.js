module.exports = (sequelize, DataTypes) => {

    const Useremail = sequelize.define("useremail", {
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        isRead: {
            type: DataTypes.BOOLEAN
        }
    
    })

    return Useremail

}