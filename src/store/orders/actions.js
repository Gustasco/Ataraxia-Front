import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = process.env.REACT_APP_API_URL

const handleToken = () => {
    const BEARER_TOKEN = localStorage.getItem('token')

    let config = {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
        },
    }
    return config
}

const createOrder = createAsyncThunk(
    'orders/createOrder',
    async ({ id, preference_id = '', status = '' }) => {
        try {
            const response = await axios.post(
                `${API_URL}/checkout/${id}/?preference_id=${preference_id}&status=${status}`
            )
            return {
                order: response.data,
                message: response.data.message,
            }
        } catch (error) {
            return {
                order: null,
                message: error.response.data,
            }
        }
    }
)
const getUserOrders = createAsyncThunk('orders/getUserOrders', async () => {
    try {
        const response = await axios.get(`${API_URL}/checkout`, handleToken())
        return {
            orders: response.data,
            message: response.data.message,
        }
    } catch (error) {
        return {
            orders: null,
            message: error.response.data.message,
        }
    }
})

const orderUpdate = createAsyncThunk('updateOrder', async ({ id, status }) => {
    try {
        const response = await axios.put(
            `${API_URL}/checkout/order/${id}`,
            status,
            handleToken()
        )
        return {
            order: response.data,
            message: response.data.message,
        }
    } catch (error) {
        return {
            order: null,
            message: error.response.data.message,
        }
    }
})

const getOrders = createAsyncThunk('getOrders', async () => {
    try {
        const response = await axios.get(
            `${API_URL}/checkout/all`,
            handleToken()
        )
        return {
            orders: response.data,
            message: response.data.message,
        }
    } catch (error) {
        console.log(error)
        return {
            orders: null,
            message: error.response.data.message,
        }
    }
})

const getOrder = createAsyncThunk('getOrder', async ({ id }) => {
    try {
        const response = await axios.get(
            `${API_URL}/checkout/${id}`,
            handleToken()
        )
        return {
            order: response.data,
            message: 'Orden obtenida',
        }
    } catch (error) {
        return {
            order: null,
            message: 'Error al obtener la orden',
        }
    }
})

const orderActions = {
    getUserOrders,
    orderUpdate,
    getOrders,
    createOrder,
    getOrder,
}

export default orderActions
