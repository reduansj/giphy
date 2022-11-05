import { useQuery } from "@tanstack/react-query";
import { getGifs } from "api/gifs";
import Edit from "components/edit";
import {
  Dashboard,
  GifContainer,
  PageContainer,
  GifBackground,
  Loader,
} from "components/mainStyles/Main.styled";
import Remove from "components/remove";
import React from "react";

const Home = () => {
  const { isLoading, isError, data } = useQuery(["getAllGifs"], getGifs);

  if (isLoading) {
    return (
      <>
        <PageContainer>
          <Dashboard>
            <Loader>LOADING ...</Loader>
          </Dashboard>
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <PageContainer>
        <Dashboard>
          {data.map((gif) => {
            return (
              <GifBackground key={gif._id} img={gif.Url}>
                <GifContainer>
                  {gif.Title}
                  <Edit gif={gif} />
                  <Remove gif={gif} />
                </GifContainer>
              </GifBackground>
            );
          })}
        </Dashboard>
      </PageContainer>
    </>
  );
};

export default Home;
