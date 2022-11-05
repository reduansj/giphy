import { IconContainerLeft } from "components/mainStyles/Main.styled";
import Modal from "components/modal/Modal";
import DeleteGif from "./deleteGif/DeleteGif";

const Remove = ({ gif }) => {
  return (
    <IconContainerLeft>
      <Modal ModalTitle={"Delete Gif"}>
        <DeleteGif gif={gif} />
      </Modal>
    </IconContainerLeft>
  );
};

export default Remove;
