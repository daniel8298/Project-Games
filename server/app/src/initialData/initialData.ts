import jsonfile from "jsonfile";
const filePathGames = "src/initialData/games.json";
const filePathUsers = "src/initialData/users.json";

export const readJsonFileUsers = async () => {
  try {
    const data = await jsonfile.readFile(filePathUsers);
    return Promise.resolve(data);
  } catch (error) {
    Promise.reject(error);
  }
};
export const readJsonFileGames = async () => {
  try {
    const data = await jsonfile.readFile(filePathGames);

    return Promise.resolve(data);
  } catch (error) {
    Promise.reject(error);
  }
};
