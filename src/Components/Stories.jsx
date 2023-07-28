import React from "react";
import { useGlobalData } from "../Context/AppContext";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ThreeDots } from "react-loader-spinner";
import { styled } from "@mui/material/styles";

const Stories = () => {
  const { hits, isLoading, handleRemove, isError } = useGlobalData();
  //Handle loading
  if (isLoading) {
    return (
      <div className="loader">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
  //Handle error
  if(isError){
    return <div className="error">Failed to fetch stories!</div>
  }
  //Resonsive card breakpoints
  const StyledCard = styled(Card)(({ theme }) => ({
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "60%",
    },
  }));
  return (
    <div className="card-container">
      {hits.map((e) => (
        <StyledCard
          sx={{ boxShadow: "0 5px 10px lightGrey", bgcolor: "#ffffff" }}
          key={e.objectID}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 20, fontWeight: "bold" }}
              variant="h2"
              color="text.primary"
              gutterBottom
            >
              {e.title || "N/A"}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              By <span>{e.author || "N/A"}</span> |{" "}
              <span>{e.num_comments || "N/A"}</span> comments
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button size="small">
              <a
                href={e.url}
                className="read-more"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </Button>
            <Button
              color="error"
              size="small"
              sx={{ fontWeight: "bold" }}
              onClick={() => handleRemove(e.objectID)}
            >
              Remove
            </Button>
          </CardActions>
        </StyledCard>
      ))}
    </div>
  );
};

export default Stories;
