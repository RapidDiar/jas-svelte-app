import axios from 'axios';

const axiosApiMedia = axios.create({
	baseURL: 'http://127.0.0.1:8000/',
	// baseURL: 'http://10.0.10.49:8000/',
	timeout: 5000,
	headers: {
		'Content-Type': 'multipart/form-data'
	}
});

export default axiosApiMedia;
