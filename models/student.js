

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
        allownull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:" First Name is required"
            }
        },
        len:{
            args:[2,10],
            msg:" First Name must be between 2 and 10 characters"
        }
        

    },
    lastname:{
        field:'lastName',
        type: DataTypes.STRING,
        allownull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:" Last Name is required"
            }
        },
        len:{
            args:[2,10],
            msg:" Last Name must be between 2 and 10 characters"
        }


    },
    
    emailaddress:{
        field:'emailAddress',
        type: DataTypes.STRING,
        allownull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:"Email address is required"
            }
        }

    },
    classLevel:{
        field:'classLevel',
        type: DataTypes.STRING,
        allownull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:"Class level is required"
            }
        }

    },

    enrollStatus: {
        field: 'enrollstatus',
        type: DataTypes.STRING,
        allownull:false
        
    },

    enrollYear:{
        field:'enrollYear',
        type: DataTypes.INTEGER,
        allownull:false 


    }


    

})
Student.associate = function(models) {
    // Associating student with Marks
    
    Student.hasMany(models.Marks, {
      onDelete: "cascade"

    });
    Student.belongsTo(models.Class, {
        onDelete: "cascade"
      });
  };
  
    
return Student;
}
  
    
  

  
  