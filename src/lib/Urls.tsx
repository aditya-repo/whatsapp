const BASE = 'http://localhost:4000'

const URL = {
    ROOT: (): string => BASE,
    LOGIN: (): string => `${BASE}/login`,
    SIGNUP: (): string => `${BASE}/signup`,
    DASHBOARD: (): string => `${BASE}/user`,
    CHATROOM: (id: string | number) => `${BASE}/user/${id}`,
    PROFILE: (): string => `${BASE}/user/profile`,
    USER_PROFILE: (id: string | number) => `${BASE}/user/profile/${id}`,
    SEARCH_USER: (id: string | number) => `${BASE}/user/search/${id}`,
    PAIR_NEW_USER: (): string => `${BASE}/user/pairing`,
}

export default URL