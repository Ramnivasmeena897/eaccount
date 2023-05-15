document.getElementById('btn').addEventListener("click", RecordSave);

function RecordSave()
{
	let adhar=document.getElementById("adhar").value;
	let name=document.getElementById("name").value;
	let mobile=document.getElementById("mobile").value;
	let pan=document.getElementById("pan").value;
	let dob=document.getElementById("dob").value;
	let email=document.getElementById("email").value;
	let pass=document.getElementById("pwd").value;
	var acno = Math.floor(Math.random() * 9000000000) + 1000000000;
    
	let url="http://localhost:3000/customer";
	   fetch(url, {
                method: "POST",
                body: JSON.stringify({
                addhar_no: adhar,
                name: name,
                mobile: mobile,
                pan:pan,
                dob:dob,
                email:email,
                password:pass,
                acno: acno
                }),
              headers: {
                         "Content-type": "application/json; charset=UTF-8"
                       }
	      })
	   .then(response=>response.json())
	   .then(response=>alert("Data save!!!"));
}