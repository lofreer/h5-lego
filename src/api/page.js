import request from '@/utils/request'

const prefix = '/api/v1'

/**
 * 页面查询：列表
 * @param {*} query
 */
export const pageList = (query) => {
  return request({
    url: `${prefix}/lego/page/list`,
    method: 'get',
    params: query
  })
}

/**
 * 页面查询
 * @param {*} query
 */
export const pageOne = (query) => {
  return request({
    url: `${prefix}/lego/page`,
    method: 'get',
    params: query
  })
}

/**
 * 页面创建
 * @param {*} query
 */
export const pageCreate = (query) => {
  return request({
    url: `${prefix}/lego/page`,
    method: 'post',
    data: query
  })
}

/**
 * 页面修改
 * @param {*} query
 */
export const pageUpdate = (query) => {
  return request({
    url: `${prefix}/lego/page`,
    method: 'put',
    data: query
  })
}

/**
 * 页面删除
 * @param {*} query
 */
export const pageDestroy = (query) => {
  return request({
    url: `${prefix}/lego/page`,
    method: 'delete',
    data: query
  })
}
