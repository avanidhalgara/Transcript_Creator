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
    grade1:{
        field:'grade1',
        type: DataTypes.STRING,
        allownull:false

    },
    grade2:{
        field:'grade2',
        type: DataTypes.STRING,
        allownull:false

    },
    grade3:{
        field:'grade3',
        type: DataTypes.STRING,
        allownull:false

    },
    grade4:{
        field:'grade4',
        type: DataTypes.STRING,
        allownull:false

    },
    grade5:{
        field:'grade5',
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
