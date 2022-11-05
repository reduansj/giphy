import React from "react";
import { Btn, Content, Title, Wrap } from "./DeleteGif.styled";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteGif } from "api/gifs";
import toast from "react-hot-toast";

const DeleteGif = ({ gif, onClose }) => {
  const queryClient = useQueryClient();

  const removeGif = useMutation(deleteGif, {
    onSuccess: (resp) => {
      GifUpdated(resp);
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  const GifUpdated = (data) => {
    queryClient.invalidateQueries(["getAllGifs"]);
    onClose();
    toast.success("Gif deleted");
  };

  return (
    <Wrap>
      <Title>Are you sure you want to delete this gif?</Title>
      <Content>
        <Btn onClick={() => removeGif.mutate(gif._id)}>Yes</Btn>
        <Btn danger={"danger"} onClick={() => onClose()}>
          Cancel
        </Btn>
      </Content>
    </Wrap>
  );
};

export default DeleteGif;
