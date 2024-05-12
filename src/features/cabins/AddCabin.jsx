import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin form">
          <CreateCabinForm />
        </Modal.Window>
        {/* ========== */}
        {/* <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
      </Modal>
    </div>

    // ==============================
    // <div>
    //   <Button onClick={() => setisOpen((show) => !show)}>Add new cabin</Button>
    //   {isOpen && (
    //     <Modal onClose={() => setisOpen(false)}>
    //       <CreateCabinForm onCloseModal={() => setisOpen(false)} />
    //     </Modal>
    //   )}
    // </div>
  );
}

export default AddCabin;
