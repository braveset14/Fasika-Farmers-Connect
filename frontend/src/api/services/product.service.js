import http from '../http';
import { ENDPOINTS } from '../endpoints';

// Product Business Service
export const productService = {
    getProducts: async () => {
        return await http.get(ENDPOINTS.PRODUCTS.LIST);
    },

    getProductDetail: async (id) => {
        return await http.get(ENDPOINTS.PRODUCTS.DETAIL(id));
    },

    createProduct: async (data) => {
        return await http.post(ENDPOINTS.PRODUCTS.CREATE, data);
    },

    updateProduct: async (id, data) => {
        return await http.put(ENDPOINTS.PRODUCTS.UPDATE(id), data);
    },

    deleteProduct: async (id) => {
        return await http.delete(ENDPOINTS.PRODUCTS.DELETE(id));
    }
};
