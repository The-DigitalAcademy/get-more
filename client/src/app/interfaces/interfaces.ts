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
  contactnumber: string;
  alternativenumber: string;
  streetaddress: string;
  suburb: string;
  city: string;
  postalcode: string;
  province: string;
}

export interface LoginResponseInterface {
  message: string;
  token: string;
  user: UserInterface;
}

export interface RegisterResponseInterface {
  message: string;
}

export interface addproductInterface {
  image: string;
  name: string;
  price: string;
  description: string;
  category: string;
  quantity:string;

}
export interface addproductResponseInterface {
  message: string;
}