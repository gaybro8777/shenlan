import request from '~/utils/request'

export default {
  createOrder(courseId) {
    return request({
      baseURL: 'http://localhost:8170',
      url: `/api/trade/order/auth/save/${courseId}`,
      method: 'post'
    })
  },
  getById(orderId) {
    return request({
      baseURL: 'http://localhost:8170',
      url: `/api/trade/order/auth/get/${orderId}`,
      method: 'get'
    })
  },
  isBuy(courseId) {
    return request({
      baseURL: 'http://localhost:8170',
      url: `/api/trade/order/auth/is-buy/${courseId}`,
      method: 'get'
    })
  }
}
