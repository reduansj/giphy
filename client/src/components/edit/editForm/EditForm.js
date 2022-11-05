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
import { updateGif } from "api/gifs";
import toast from "react-hot-toast";

const EditForm = ({ gif, onClose }) => {
  const queryClient = useQueryClient();

  const editGif = useMutation(updateGif, {
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
    onClose();
    toast.success("Gif updated");
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const updatedData = { Url: gif.Url, ...data };
    editGif.mutate({ id: gif._id, gifData: updatedData });
  };

  return (
    <FormWrap>
      <FormContent>
        <Form onSubmit={handelSubmit}>
          <FormLabel htmlFor="for">Url</FormLabel>
          <FormInput name="Url" type="text" disabled defaultValue={gif.Url} />
          <FormLabel htmlFor="for">Title</FormLabel>
          <FormInput
            name="Title"
            type="text"
            required
            defaultValue={gif.Title}
          />
          <FormLabel htmlFor="for">Genre</FormLabel>
          <FormSelector name="Genre">
            <Option value="sports">Sports</Option>
            <Option value="funny">Funny</Option>
          </FormSelector>
          <FormButton type="submit">Edit</FormButton>
        </Form>
      </FormContent>
    </FormWrap>
  );
};
export default EditForm;
