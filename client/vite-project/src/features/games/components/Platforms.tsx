import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { itemData } from "../db/platformsItems";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterGames } from "../gamesSlice";
import { useAppSelector } from "../../../store/hooks";

export const Platforms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { games } = useAppSelector((store) => store.games);

  const onSubmit = (platform: string) => {
    dispatch(filterGames({ games, platform }));
    navigate(`/store/search`);
  };
  return (
    <ImageList
      key="Subheader"
      cols={1}
      sx={{
        minWidth: 10,
        maxWidth: 350,
        minHeight: 10,
      }}
    >
      <ImageListItem key="Subheader" cols={1}>
        <ListSubheader sx={{ textAlign: "center" }} component="div">
          PLATFORMS
        </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ marginBottom: 2, padding: 1 }}>
          <Card onClick={() => onSubmit(item.platform)}>
            <CardMedia
              component="img"
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.platform}
              loading="lazy"
              style={{ height: 300 }}
            />
          </Card>
          <ImageListItemBar
            title={item.platform}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.platform}`}
              ></IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
