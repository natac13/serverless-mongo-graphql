import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { useGetUserManyQuery } from "./types/generated";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "grid",
    placeItems: "center center",
  },
  cards: {
    display: "flex",
    justifyContent: "space-around",
    height: "min-content",
  },
}));

function App() {
  const classes = useStyles();
  const { loading, error, data } = useGetUserManyQuery();
  if (loading) {
    return (
      <section className={classes.root}>
        <Alert severity="info">Loading...</Alert>
        <CircularProgress />
      </section>
    );
  }
  if (error) {
    return (
      <section className={classes.root}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </section>
    );
  }
  // console.log(data);
  return (
    <section className={classes.root}>
      <Alert severity="success">Got the data!</Alert>
      <section className={classes.cards}>
        {data?.userMany?.map((user) => (
          <Box m={1}>
            <Card>
              <CardHeader title={user.name} />
              <CardContent>
                <Typography>{`Email: ${user.email}`}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </section>
    </section>
  );
}

export default App;
