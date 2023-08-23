import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export default {
  getUserList(searchModel) {
    return request(
      {
        url: '/user/list',
        method: 'get',
        params: {
          pageNo: searchModel.pageNo,
          pageSize: searchModel.pageSize,
          username: searchModel.username,
          phone: searchModel.phone
        }

      }
    )
  }
}
