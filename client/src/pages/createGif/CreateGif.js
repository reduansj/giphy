import { Container } from "./CreateGif.styled";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  FormWrap,
  FormContent,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  FormSelector,
  Option,
} from "components/form/Form.styled";
import { createGif, updateGif } from "api/gifs";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateGif = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const newGif = useMutation(createGif, {
    onSuccess: (resp) => {
      GifUpdated(resp);
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  const GifUpdated = (data) => {
    queryClient.invalidateQueries(["getAllGifs"]);
    queryClient.invalidateQueries(["sports"]);
    queryClient.invalidateQueries(["funny"]);
    toast.success("Gif created");
    navigate("/");
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    newGif.mutate(data);
  };

  return (
    <Container>
      <FormWrap>
        <FormContent>
          <Form onSubmit={handelSubmit}>
            <FormLabel htmlFor="for">Url</FormLabel>
            <FormInput name="Url" type="text" required />
            <FormLabel htmlFor="for">Title</FormLabel>
            <FormInput name="Title" type="text" required />
            <FormLabel htmlFor="for">Genre</FormLabel>
            <FormSelector name="Genre">
              <Option value="sports">Sports</Option>
              <Option value="funny">Funny</Option>
            </FormSelector>
            <FormButton type="submit">Create</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};
export default CreateGif;
