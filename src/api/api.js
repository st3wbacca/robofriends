export const apiCall = (link) => fetch(link)
	.then(response => {
		if (!response.ok) {
			throw Error(`${response.status} ${response.statusText}`);
		}
		return response.json();
	});