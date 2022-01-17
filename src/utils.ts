// function to check if email is valid
export function isEmail(email:string) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

//  function to check regex of iso date format
export function isDate(date:string) {
	const re = /^\d{4}-\d{2}-\d{2}T[\d:.]*/;
	return re.test(String(date));
}
