export type GameInterface = {
  _id: string;
  name: string;
  genre: string;
  platforms: string;
  description: string;
  contactNumber: string;
  dateGame: string;
  imageUrl: string;
  imageAlt: string;
  area: {
    areaCountry: string;
    city: string;
    street: string;
  };
};
