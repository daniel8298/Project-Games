export interface Address {
  areaCountry: string;
  city: string;
  street: string;
}
type Platform =
  | 'PC'
  | 'PS5'
  | 'PS4'
  | 'XBOX SERIES'
  | 'XBOX ONE'
  | 'NINTENDO SWITCH';

export interface GameInterface {
  _id?: string;
  name: string;
  genre: string;
  description: string;
  contactNumber: string;
  imageUrl: string;
  imageAlt: string;
  dateGame: string;
  address: Address;
  platforms: Platform;
  userId: string;
  email: string;
  userName: string;
}
