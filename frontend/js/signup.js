document.getElementById("btn-submit").addEventListener("click",()=>{
    
    let user=document.getElementById("username").value
    let password=document.getElementById("password").value


    fetch("http://localhost:3004/authentication/adduser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        user,password
    })
  })
    .then((res) => {
      if(res.status==201)
      {
        alert("Registration Succesfull")
      }
      else
      {
        alert("Registration Failed")
      }
    })
    .catch((error)=>{alert("server not connected")})


})