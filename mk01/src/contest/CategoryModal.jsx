import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CategoryModalList from "./CategoryModalList";

const CategoryModal = ({ categories, handleClose, isModalVisible }) => {
  const categoriesToDisplay = categories.map((category) => {
    return <CategoryModalList key={category.id} category={category} />;
  });

  return (
    // <Modal show={isModalVisible} onHide={() => handleClose()}>

    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>success</Modal.Title>
      </Modal.Header>
      <Modal.Body>{categoriesToDisplay}</Modal.Body>
      <Modal.Footer>
        <Button>close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CategoryModal;
