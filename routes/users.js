exports.sign = function(req, res){

    
username=req.body.username;
			 
	password= req.body.password;


req.getConnection(function(err,connection){
	      
	       
	    	   var sql='SELECT * FROM admin WHERE username = ?';
		       connection.query(sql,[username],function(err,rows){
		           if(err)
		               {
		                   throw err;
		               }
		           else{
		               
		        	   if(rows.length >0){
		        		   if(password == rows[0].password){

		        		   	console.log("match");
		        		   req.session.username=username;
		        		   console.log(req.session.username);
		        		    res.redirect('/customers');

		        		   } else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
		        		      
		        	   }else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }

		       }	       
		   });
		      
	   });

		      
	  
  //res.render('signup', { title: 'Hello World' });
};


exports.sup = function(req, res){


  res.render('sup', { title: 'Hello World' });
};

exports.register = function(req, res){

	var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            username    : input.username,
            email   : input.emailid,
            password   : input.pswd 
        
        };
        
        var query = connection.query("INSERT INTO admin set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/');
          
        });
        
       // console.log(query.sql); get raw query
    
    });


  //res.render('sup', { title: 'Hello World' });
};