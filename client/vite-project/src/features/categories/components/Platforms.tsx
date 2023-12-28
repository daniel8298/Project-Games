import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { itemData } from "../db/categoriesItems";
import { useNavigate } from "react-router-dom";

export const Platforms = () => {
  const navigate = useNavigate();
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
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ height: 300 }}
            onClick={() => navigate(`/store/search`)}
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              ></IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
