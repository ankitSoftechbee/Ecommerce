const key = import.meta.env.VITE_API_URL;

export const logInAPIConfig={
    login:key + '/api/Authentication/token'
}