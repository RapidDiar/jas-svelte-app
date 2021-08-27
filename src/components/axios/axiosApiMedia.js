import axios from 'axios';

const axiosApiMedia = axios.create({
	baseURL: 'http://127.0.0.1:8000/app/',
	timeout: 5000,
	headers: {
		'Content-Type': 'multipart/form-data'
	}
});

export default axiosApiMedia;
