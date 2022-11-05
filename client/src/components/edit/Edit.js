import Modal from "components/modal/Modal";

import EditForm from "./editForm";
import { IconContainerRight } from "components/mainStyles/Main.styled";

const Edit = ({ gif }) => {
  return (
    <IconContainerRight>
      <Modal edit={true} ModalTitle={"Edit your Gif"}>
        <EditForm gif={gif} />
      </Modal>
    </IconContainerRight>
  );
};

export default Edit;
