

module.exports = function(sequelize, DataTypes) {
    // created fields for student table
    var Student = sequelize.define("Student", {
      
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
        type: DataTypes.INTEGER,
        allownull:false,
        

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
        
    },

    phoneNumber:{
        field:'phoneNumber',
        type: DataTypes.STRING,
        allownull:false 
        
    },

    address:{
        field:'address',
        type: DataTypes.STRING,
        allownull:false 
        
    },



    

})
Student.associate = function(models) {
    // Associating student with Marks
    
    Student.hasMany(models.Marks, {
      onDelete: "cascade"

    });
    
  };
  
    
return Student;
}
  
    
  

  
  