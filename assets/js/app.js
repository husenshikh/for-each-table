
const cl=console.log;

let brothers = [
				{
					fname : "Husen",
					lname : "Shaikh",
					nickname : "Bablu",
					contact : "9322734018",
					email : "shaikhhusen1499@gmail.com"
				},
				{
					fname : "Ratan",
					lname : "Shaikh",
					nickname : "munna",
					contact : "7498526225",
					email : "munnashaikh0786@gmail.com"
				},
				{
					fname : "Altaf",
					lname : "Shaikh",
					nickname : "pillu",
					contact : "9379920960",
					email : "shaikhaltaf1111@gmail.com"
				},
				{
					fname : "Asif",
					lname : "Shaikh",
					nickname : "aashu",
					contact : "7773986035",
					email : "asifshaikh2001@gmail.com"
				},
				{
					fname : "Saif",
					lname : "Shaikh",
					nickname : "guddu",
					contact : "7350455725",
					email : "shaikhsaif2003@gmail.com"
				}


]

let alltr = ``;

brothers.forEach(function(bro,i){
	alltr +=`
					<tr>
						<td>${i + 1}</td>
						<td>${bro.fname}</td>
						<td>${bro.lname}</td>
						<td>${bro.nickname}</td>
						<td>${bro.contact}</td>
						<td>${bro.email}</td>
					</tr>
			`
})

const eachcontainer = document.getElementById("eachcontainer");
eachcontainer.innerHTML = alltr
















