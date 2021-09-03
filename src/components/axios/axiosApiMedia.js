import axios from 'axios';

const axiosApiMedia = axios.create({
	baseURL: 'http://127.0.0.1:8000/app/',
	// baseURL: 'http://10.0.30.126:8000/app/',
	headers: {
		'Content-Type': 'multipart/form-data'
	}
});

export default axiosApiMedia;
