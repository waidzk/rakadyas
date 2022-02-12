function getUrlVar(param=null) {
	if(param !== null) {
		let vars = [], hash;
		let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(let i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars[param];
	} else {
		return null;
	}
}

let paramURL = getUrlVar("id");
console.log(paramURL);

if(paramURL === "anonim"){
    const yth_elmnt = document.querySelector(".yth");
    yth_elmnt.style.display = "none";
} else if(paramURL !== undefined ){
	let result = invitation_data.find( ({id}) => id === paramURL);
    const name_elmnt = document.querySelector("#invite-name");
    name_elmnt.innerHTML = `${result.name}`
} else {
    const yth_elmnt = document.querySelector(".yth");
    const btn_elmnt = document.querySelector(".button-buka-undangan");
    yth_elmnt.style.display = "none";
    btn_elmnt.style.display = "none";
}