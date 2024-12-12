const key = import.meta.env.VITE_API_URL;

export const logInAPIConfig = {
    login: key + '/api/Authentication/token'
}

export const signUpAPIConfig = {
    login: key + '/api/Authentication/signUp',
    countryList: key + '/api/Authentication/Country'
}