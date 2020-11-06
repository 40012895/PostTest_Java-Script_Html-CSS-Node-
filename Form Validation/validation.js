function validateForm()
        {
            var uup=/[A-Z]/;
            var lc=/[a-z]/;
            var num=/[0-9]/;
            var mobvar=/^\d{10}$/;
            var mail1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var pass=document.getElementById("password").value;
            var mail2=document.getElementById("email").value;
            var mob=document.getElementById("mobno").value;
            var name=document.getElementById("username").value;
            if(name.length<5 || name.length>15)
            {
                alert("Enter Valid Username");
                document.Document.text.focus();
            }
            else if(!(mail2.match(mail1)))
            {
                alert("Enter valid mail ID");
                document.Document.email.focus();
            }
            else if(!(pass!="" && pass.match(uup)&& pass.match(lc)&&pass.match(num)))
            {
                alert("Enter Valid Password: Password should contain uppercase,lowercase and numbers");
                document.Document.pass.focus();
            }
            else if(document.getElementById("city").value=="")
            {
                alert("Enter city");
                document.Document.city.focus();
            }
            else if(!(mob.match(mobvar)))
            {
                alert("Enter valid Mobile Number");
                document.Document.mob.focus();
            }
            else{
                validateuser();
            }
        }
function validateuser()
{
    var arr = ["Tommmy","Jerriee","Bheema","Kaliya"]; 
        
        var name=document.getElementById("username").value;
        num=0;
        for(i=0;i<arr.length;i++)
        {  
            if(name==arr[i])
            {
                alert('Enter Diffrent Name');
                num=0;
                break;
            }
            else{
                num=1;
            }
        } 
        if(num==1)
        {
            arr.push(name);
            alert('Succesfully Registered \nUsername: '+name+'\n');
        }
}