export interface RegisterInterface {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface UserInterface {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}

export interface LoginResponseInterface {
  message: string;
  tokeng: string;
  user: UserInterface;
}

export interface RegisterResponseInterface {
  message: string;
}