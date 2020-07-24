module.exports = function(sequelize, DataTypes) {
    var Class = sequelize.define("Class", {
      // Giving the Student model an id
    //   id: {
    //     field:'studentId',
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     allownull:false
        
    //     },
    classOne:{
        
        type: DataTypes.STRING,
        allownull:false

    },
    classTwo:{
        
        type: DataTypes.STRING,
        allownull:false

    },
    
    classThree:{
        
        type: DataTypes.STRING,
        allownull:false
    },
    classFour:{
        
        type: DataTypes.STRING,
        allownull:false

    },
    classFive:{
        
        type: DataTypes.STRING,
        allownull:false

    },
    

    })
    Class.associate = function(models) {
        // Associating student with class
        
        Class.hasMany(models.Student, {
          onDelete: "cascade"
        });
      };
      
    
      
      return Class;
}
