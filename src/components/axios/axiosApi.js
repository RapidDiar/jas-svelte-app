import axios from 'axios';

const axiosInstance = axios.create({
	// baseURL: 'http://10.0.30.126:8000/app/',
	// baseURL: 'http://0.0.0.0:8000/app/',
	baseURL: 'http://127.0.0.1:8000/app/',
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json'
	}
});

export default axiosInstance;
