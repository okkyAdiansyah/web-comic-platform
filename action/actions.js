'use server';

import axios from "axios";
import { redirect } from "next/navigation";

export const SearchFormAction = async (formData) => {
    const rawFormData = formData.get('search');

    let searchQuery = encodeURIComponent(rawFormData);

    redirect(`/search?search=${searchQuery}`);
}

export const GetFeaturedPosts = async () => {
    const res = await axios({
        method : 'get',
        baseURL : 'http://localhost:3000/',
        url : 'api/v1/series/featured-series'
    }).then(response => response.data.payload)

    return res;
}