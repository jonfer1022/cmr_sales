export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  name: string;
}

export interface IConfirmSignup extends IRegister {
  code: string;
}

export interface IResponseLogin {
  token: string;
  refreshToken: string;
}
