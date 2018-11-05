import Request from './Request'

export const getUser = () => {
  return Request.get({ url: 'http://localhost:3333/api/users' })
}

export const getUrl = ({ url, params, body }) => {
  return Request.get({ url, params, body })
}
