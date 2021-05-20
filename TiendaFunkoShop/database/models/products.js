module.exports=function(sequelize, dataTypes){
let alias="Products";
let cols={
    id_product:{
    type: dataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false},

    name_product:{
    type:dataTypes.STRING,
    allowNull:false},

    product_description:{
    type:dataTypes.STRING,
    allowNull:false},

    price:{
    type:dataTypes.INTEGER,
    allowNull:false},

    image_product:{
    type:dataTypes.STRING,
    allowNull:false
    },
    category:{
        type:dataTypes.STRING}
};

let config={
    table_name:"products",
    timestamps:false
}


    let Products=sequelize.define(alias, cols, config)

    return Products
}