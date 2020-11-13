import request from '@/lego/utils/request'

const prefix = '/api/v1'

/**
 * 页面查询：列表
 * @param {*} query
 */
export const getPageList = (query) => {
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
export const getPageDetail = (query) => {
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
export const createPage = (query) => {
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
export const updatePage = (query) => {
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
export const deletePage = (query) => {
  return request({
    url: `${prefix}/lego/page`,
    method: 'delete',
    data: query
  })
}
