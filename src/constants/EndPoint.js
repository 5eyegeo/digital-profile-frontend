const APIS = {
  // AUTH
  LOGIN: `/auth/jwt/create/`,
  VERIFY: `/auth/jwt/verify/`,
  REFRESH: `/auth/jwt/refresh/`,
  CURRENT_USER_PROFILE: '/auth/users/me/',
  PERMISSIONS:`/permissions/`,
  USER_LIST:`/auth/users/`,
  GROUP_LIST:`auth-permission/group/`,
}

export default APIS