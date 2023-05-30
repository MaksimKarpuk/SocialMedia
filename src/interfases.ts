export interface IInitialState {
  email: string | null;
  token: string | null;
  id: string | null;
}
export interface IFirebase {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: number;
  appId: string;
}

export interface IUser {
  first: string;
  last: string;
  born: number;
}
export interface IPersonalData {
  birthdayDate: string;
  firstName: string;
  gender: string;
  job: string;
  secondName: string;
  thirdName: string;
  permition: boolean;
}
