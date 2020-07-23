

module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
      // Giving the Student model an id
    //   id: {
    //     field:'studentId',
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     allownull:false
        
    //     },
    firstname:{
        field:'firstName',
        type: DataTypes.STRING,
        allownull:false

    },
    lastname:{
        field:'lastName',
        type: DataTypes.STRING,
        allownull:false

    },
    parentname:{
        field:'ParentName',
        type: DataTypes.STRING,
        allownull:false

    },
    emailaddress:{
        field:'emailAddress',
        type: DataTypes.STRING,
        allownull:false

    },
    classLevel:{
        field:'classLevel',
        type: DataTypes.STRING,
        allownull:false

    }

    

})
Student.associate = function(models) {
    // Associating student with Marks
    
    Student.hasMany(models.Marks, {
      onDelete: "cascade"
    });
  };
return Student;
}
  
    
  

  
  