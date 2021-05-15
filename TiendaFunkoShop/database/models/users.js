module.exports=function(sequelize, dataTypes){
    let alias="Users";
    let cols={
        id_user:{
        type: dataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false},
    
        user_name:{
        type:dataTypes.STRING,
        allowNull:false},
    
        password:{
        type:dataTypes.STRING,
        allowNull:false},
    
        profiel_img:{
        type:dataTypes.INTEGER,
        allowNull:false}
    };
    
    let config={
        table_name:"users",
        timestamps:false
    }
    
    
        let Users=sequelize.define(alias, cols, config)
    
        return Users
    }
    