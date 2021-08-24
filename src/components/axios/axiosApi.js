import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://0.0.0.0:8000/app/',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json',
	}
});

export default axiosInstance;
