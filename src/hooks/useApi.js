import { useState, useEffect } from "react";
import axios from "axios";

// Custom Hook برای انجام درخواست‌های GET، POST، PUT و DELETE
const useApi = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000${endpoint}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(true);
            }
        };

        fetchData();
    }, [endpoint]);

    const getDataFromID = async (id) => {
        try {
            const respose = await axios.get(`http://localhost:3000${endpoint}/${id}`);
            return respose
        } catch (error) {
            console.error(error)
        }
    }

    const postData = (newData) => {
        try {
            axios.post(`http://localhost:3000${endpoint}`, newData)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteData = (id) => {
        try {
            axios.delete(`http://localhost:3000${endpoint}/${id}`);
        } catch (error) {
            console.error(error)
        }
    }

    const patchData = (newData,endpoint, id) => {
        axios.post(`http://localhost:3000${endpoint}/${id}` , newData)
            .catch((error) => {
            console.error(error.message)
        })
    }

    const putData = (updetedData) => {
        try {
            axios.put(`http://localhost:3000${endpoint}`, updetedData);
        } catch (error) {
            console.error(error)
        }
    }
    return {
        data,
        loading,
        error,
        postData,
        deleteData,
        putData,
        getDataFromID,
        patchData
    };
};

// توابع مختلف برای هر درخواست
export const useProducts = () => useApi("/products");
export const useArticles = () => useApi("/Articles")
export const useProductsSoftFabrics = () => useApi("/products_soft_fabrics")
export const useBlogs = () => useApi("/blogs")