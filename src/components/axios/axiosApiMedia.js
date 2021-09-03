import axios from 'axios';

const axiosApiMedia = axios.create({
	baseURL: 'http://10.0.30.48:8000/app/',
	headers: {
		'Content-Type': 'multipart/form-data'
	}
});

export default axiosApiMedia;
