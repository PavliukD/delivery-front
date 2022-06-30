import axios from "axios";

const baseUrl = "https://delivery-app-test-task-pds.herokuapp.com/api"

axios.defaults.baseURL = baseUrl

export const api = {
    products: {
        get: async () => {
            try {
                const response = await axios.get('/products')
                return response.data
            } catch (e) {
                return e
            }
        },

        add: async (productData) => {
            try {
                const response = await axios.post('/products', productData)
                console.log(response)
                return response.data
            } catch (e) {
                return e
            }
        } 
    },

    orders: {
        get: async (id) => {
            try {
                const response = await axios.get(`/orders/${id}`)
                console.log(response)
                return response.data
            } catch (e) {
                return  e
            }
        },
        add: async (data) => {
            try {
                const response = await axios.post('/orders', data)
                console.log(response)
                return response.data
            } catch (e) {
                return e
            }
        }
    }
}