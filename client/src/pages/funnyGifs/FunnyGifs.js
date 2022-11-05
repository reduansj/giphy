import { useQuery } from "@tanstack/react-query";
import { getGifByGenre } from "api/gifs";
import Edit from "components/edit";
import {
  Dashboard,
  GifBackground,
  GifContainer,
  Loader,
  PageContainer,
} from "components/mainStyles/Main.styled";
import Remove from "components/remove";
import React from "react";
import { useLocation } from "react-router-dom";

const FunnyGifs = () => {
  const location = useLocation();
  const [, page] = location.pathname.split("/");
  const { isLoading, data } = useQuery([`${page}`], () => getGifByGenre(page));

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
    <PageContainer>
      <Dashboard>
        {data?.map((gif) => {
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
  );
};

export default FunnyGifs;
