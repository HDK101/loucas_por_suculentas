
export const getToken = () =>{
	const tokenString = sessionStorage.getItem('token');
	const userToken = JSON.parse(tokenString);
	console.log('SOCORROOOOOOOOOOOOOOO');
	console.log(userToken.token);
	return userToken?.token;
}; 

export const setToken = userToken => {
	sessionStorage.setItem('token', JSON.stringify(userToken));
};

