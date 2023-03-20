function send()
{
    var email=document.getElementById("Youremail").value;
    var password=document.getElementById("Yourpassword").value;

    if(email=="aavashstha2000@gmail.com" && password=="aavash7")
    {
        alert("Login Successful!😊And your message has been sent.");

    }
    else
    {
        alert("Login Failed!😢");
    }
}