import api from '@/api/pay-api'

// new Promise((resolve, reject) => {})
const errStatus = 4000

/**
 * 根据customerId获取激活密钥
 * @param {} customerId
 * @returns
 */
export function getActiveCodeWithCustomerId(customerId) {
  return new Promise((resolve, reject) => {
    api
      .STRIPE_GET_ACTIVE_CODE(customerId)
      .then((res) => {
        console.log('getActiveCodeWithCustomerId---', res)
        resolve(res)
      })
      .catch((err) => {
        console.log('getActiveCodeWithCustomerId---', err)
        resolve({ status: errStatus })
      })
  })
}

/**
 * 根据customerId获取订阅
 * @param {*} customerId
 * @returns
 */
export function getSubscriptionsWithCustomerId(customerId) {
  return new Promise((resolve, reject) => {
    api
      .STRIPE_GET_SUBSCRIPTIONS({
        customer: customerId
        // status: "active",还包括试用trialing
      })
      .then((res) => {
        console.log('getSubscriptionsWithCustomerId---', res)
        resolve(res)
      })
      .catch((err) => {
        console.log('getSubscriptionsWithCustomerId---', err)
        resolve({ status: errStatus })
      })
  })
}
export function getSubscriptionsById(subId) {
  return new Promise((resolve, reject) => {
    api
      .STRIPE_UPDATE_SUBSCRIPTIONS(subId)
      .then((res) => {
        console.log('getSubscriptionsById---', res)
        resolve(res)
      })
      .catch((err) => {
        console.log('getSubscriptionsById---', err)
        resolve({ status: errStatus })
      })
  })
}
/**
 * 根据订阅id更新订阅
 * @param {*} subId
 * @param {*} params
 * @returns
 */
export function updateSubscriptionsWithId(subId, params = {}) {
  return new Promise((resolve, reject) => {
    api
      .STRIPE_UPDATE_SUBSCRIPTIONS(subId, params)
      .then((res) => {
        console.log('updateSubscriptionsWithId---', res)
        resolve(res)
      })
      .catch((err) => {
        console.log('updateSubscriptionsWithId---', err)
        resolve({ status: errStatus })
      })
  })
}
/**
 * 根据订阅id删除订阅
 * @param {*} subId
 * @param {*} params
 * @returns
 */
export function deleteSubscriptionsWithId(subId) {
  return new Promise((resolve, reject) => {
    api
      .STRIPE_CANCEL_SUBSCRIPTIONS(subId)
      .then((res) => {
        console.log('updateSubscriptionsWithId---', res)
        resolve(res)
      })
      .catch((err) => {
        console.log('updateSubscriptionsWithId---', err)
        resolve({ status: errStatus })
      })
  })
}
/**
 * 根据email查询订阅
 * @param {*} email
 * @returns
 */
export function searchCustomerAndSubscriptions(email) {
  return new Promise((resolve, reject) => {
    let param = 'email:"' + email + '"'
    api
      .STRIPE_GET_CUSTOMER({
        query: param,
        'expand[]': 'data.subscriptions'
      })
      .then((res) => {
        console.log('searchCustomerAndSubscriptions---', res)
        resolve(res)
      })
      .catch((err) => {
        console.log('searchCustomerAndSubscriptions---', err)
        resolve({ status: errStatus })
      })
  })
}

/**
 * 重发密钥邮件
 * @param {*} email
 * @returns
 */
export function sendEmails(email) {
  return new Promise((resolve, reject) => {
    api
      .STRIPE_RESEND_EMAIL({ email: email })
      .then((res) => {
        console.log('searchCustomerAndSubscriptions---', res)
        resolve(res)
      })
      .catch((err) => {
        console.log('searchCustomerAndSubscriptions---', err)
        resolve({ status: errStatus })
      })
  })
}

export function checkPaymentIntent(id) {
  return new Promise((resolve, reject) => {
    api
      .STRIPE_SEARCH_PAYMENTINTENT(id)
      .then((res) => {
        console.log('checkPaymentIntent---', res)
        resolve(res)
      })
      .catch((err) => {
        console.log('checkPaymentIntent---', err)
        resolve({ status: errStatus })
      })
  })
}

/**
 * 获取促销折扣
 * @param {*} couponId
 * @returns
 */
export function getPromotionCode(couponId) {
  return new Promise((resolve, reject) => {
    api
      .STRIPE_GET_PROMOTION_CODE({ coupon: couponId, active: true })
      .then((res) => {
        console.log('getPromotionCode---', res)
        resolve(res)
      })
      .catch((err) => {
        console.log('getPromotionCode---', err)
        resolve({ status: errStatus })
      })
  })
}
