export type UserEntity = {
  id: string;
  names: string;
  lastnames: string;
  birthdate: Date | string;
  website?: string;
  picture?: string;
  username: string;
  email: string;
  country: string;
};
