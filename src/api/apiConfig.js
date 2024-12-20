const key = import.meta.env.VITE_API_URL;

export const logInAPIConfig = {
    login: key + '/api/Authentication/token'
}

export const signUpAPIConfig = {
    signUp: key + '/api/Authentication/signUp',
    countryList: key + '/api/Authentication/Country',
    checkSPONSERID: key + '/api/Authentication/ChecKId'
}

export const dashboardAPIConfig = {
    dashboard: key + '/Dashboard',
    currentNews: key + '/News'
}

export const profileAPIConfig = {
    myProfile: key + "/GetProfile",
    updateProfile: key + "/api/User/Profile",
}

