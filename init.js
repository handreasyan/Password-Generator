

const types = {
	numbers: [1,2,3,4,5,6,7,8,9,0],
	lowercase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
	uppercase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
	symbols: ["!","@","#","$","%","&","*"]
}

function generatePass(){
	const userTypes = []
	const checks = Array.from(document.querySelectorAll(".checks"));

	checks.forEach((element) => {
		if(element.checked){
			userTypes.push(element.name)
		}
	});

	const passlength = document.querySelector(".pass_length").value;
	
	let genPass = "";

	
	for(let j = 0 ; j < passlength; j++){

		const mathForUserTypes = Math.floor(Math.random() * userTypes.length);
		const userType = userTypes[mathForUserTypes];
		const symbType =  types[userType];
			
		const math = Math.floor(Math.random() * symbType.length);

		genPass += symbType[math]
			
		
	};

	const forGenPass = document.querySelector(".pass")
	forGenPass.value = genPass;


	document.getElementById("copy-text").onclick = function() {
	    forGenPass.select();
	    document.execCommand('copy');
	}
	
}

const but = document.querySelector(".gen");
but.addEventListener("click",generatePass);