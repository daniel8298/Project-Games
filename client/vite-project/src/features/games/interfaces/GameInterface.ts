interface GameInterface {
  id: number;
  name: string;
  category: string;
  genre: string;
  description: string;
  platform: string;
  imageUrl: string;
  imageAlt: string;
  area: {
    areaCountry: string;
    city: string;
    street: string;
  };
}

export default GameInterface;
