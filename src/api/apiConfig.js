const key = import.meta.env.VITE_API_URL;

export const logInAPIConfig = {
    login: key + '/api/Authentication/token'
}

export const signUpAPIConfig = {
    signUp: key + '/api/Authentication/signUp',
    countryList: key + '/api/Authentication/Country',
    checkSPONSERID: key + '/api/Authentication/ChecKId',
    sendEmail: key + 'api/Authentication/MSGEMAIL'
}

export const dashboardAPIConfig = {
    dashboard: key + '/Dashboard',
    currentNews: key + '/News'
}

export const profileAPIConfig = {
    myProfile: key + "/GetProfile",
    updateProfile: key + "/api/User/Profile",
    changePassword: key + '/api/User/ChangePassword',
    support: key + '/api/User/SupportTicket',
    supportResponseList: key + '/SupportResponse',
    updateProfilePic: key + '/api/User/UploadProfileImg',
    getWalletAddress: key + '/GetWalletAddress',
    updateWallet: key + '/api/User/CryptoWallet',
    updateTransactionPassword: key + '/api/User/ChangeTransactionPass'
}

export const incomeAPIConfig = {
    incomeList: key + '/IncomeReport'
}
export const packageAPIConfig = {
    invest: key + '/api/User/InvestmentPackage',
    investHistory: key + '/InvestmentHistory',
    checkWalletBalance: key + '/WalletBalance'
}

export const communityAPIConfig = {
    directList: key + '/DirectTeam',
    levelList: key + '/MyTeam'
}

export const withdrawAPIConfig = {
    getPaymentMode: key + '/GetPaymentMode',
    incomeWithdraw:key + '/api/User/Withdraw',
    withdrawHistory:key + '/WithdrawReport',
    accountSummary:key+'/AccountSummary'
}

export const walletAPIConfig={
    topUpAutoHistory:key+'/AutoDepositeHistory',
    topUpManualHistory:key+ '/ManualDepositeHistory',
    fundSummary:key+ '/FundSummary',
    paymentMode:key + '/GetDepositetAddress',
    topUpManual:key+'/api/User/DepositeWallet'
}

