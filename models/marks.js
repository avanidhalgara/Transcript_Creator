module.exports = function(sequelize, DataTypes) {
    var Marks = sequelize.define("Marks", {
      // Giving the Student model an id
    //   id: {
    //     field:'MarksId',
    //     type: DataTypes.INTEGER,
    //     primaryKey: true
    // },

    english:{
        field:'English',
        type: DataTypes.DECIMAL,
        allownull:false

    },
    maths:{
        field:'Maths',
        type: DataTypes.DECIMAL,
        allownull:false

    },
    science:{
        field:'Science',
        type: DataTypes.DECIMAL,
        allownull:false

    },
    social:{
        field:'Social',
        type: DataTypes.DECIMAL,
        allownull:false

    },
    average:{
        field:'Average',
        type: DataTypes.DECIMAL,
        allownull:false

    },
    grades:{
        field:'Grades',
        type: DataTypes.CHAR,
        allownull:false

    },


    

})
Marks.associate = function(models) {
    // We're saying that a Marks should belong to a Student
    
    Marks.belongsTo(models.Student, {
      foreignKey: {
        allowNull: false
      }
    });
  };
return Marks;
};