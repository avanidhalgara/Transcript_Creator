module.exports = function(sequelize, DataTypes) {
  // created fields for marks table
    var Marks = sequelize.define("Marks", {
      

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
        type: DataTypes.VIRTUAL,
       get(){
         return (this.maths+this.science+this.social+this.english)/4
       },
       set(){
         throw new Error("Do not try to set the average value!")
       }
    },
    // grades:{
    //     field:'Grades',
    //     type: DataTypes.CHAR,
    //     allownull:false

    // },

    // graduatedStatus: {
    //   field:"graduateStatus",
    //   type: DataTypes.BOOLEAN,
    //   allownull:false
    // }
    // 
  

    

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