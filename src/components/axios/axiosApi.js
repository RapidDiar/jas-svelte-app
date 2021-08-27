import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://10.0.40.96:8000/app/',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
		accept: 'application/json'
	}
});

export default axiosInstance;
