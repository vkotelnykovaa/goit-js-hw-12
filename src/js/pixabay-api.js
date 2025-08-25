import axios from "axios";

const API_KEY = '51936128-dd4753b80012efeea137add36';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 40;

export async function getImagesByQuery(query, page) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: PER_PAGE
    };
    const response = await axios.get(BASE_URL, { params });
    return response.data;
};