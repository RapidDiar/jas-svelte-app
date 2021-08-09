import axios from 'axios';

const axiosInstanceMediaJwt = axios.create({
	// baseURL: 'http://127.0.0.1:8000/',
	baseURL: 'http://10.0.10.49:8000/',
	timeout: 5000,
	headers: {
		Authorization: 'JWT ' + localStorage.getItem('accessToken'),
		'Content-Type': 'multipart/form-data'
	}
});

export default axiosInstanceMediaJwt;
