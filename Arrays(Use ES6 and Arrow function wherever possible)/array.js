function myFunction()
      {
        var TV1 = ["Onida", "LG", "MITV"]; 
        var Mobile1 = ["IPhone", "Samsung", "Sony"]; 
        var Laptop1 = ["Lenovo", "Sony", "HP"]; 


          var x = document.getElementById("drop1").value;
          if (x=='TV1')
          {
            document.getElementById("view").innerHTML = TV1;
          }
          else if(x=='Mobile1')
          {
            document.getElementById("view").innerHTML = Mobile1;
          }
          else if(x=='Laptop1')
          {
            document.getElementById("view").innerHTML = Laptop1;
          }
      }