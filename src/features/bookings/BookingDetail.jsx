import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDeleteBooking } from "./useDeleteBooking";
import Heading from "../../ui/Heading";
import useBookings from "./useBookings";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import ButtonText from "../../ui/ButtonText";
import BookingDataBox from "./BookingDataBox";
import ButtonGroup from "../../ui/ButtonGroup";
import { useMoveBack } from "../../hooks/useMoveBack";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking } = useBookings();
  const { mutate: deleteBooking, isLoading: isDeleting } = useDeleteBooking();
  // const { mutate: checkout, isLoading: isCheckingOut } = useCheckout();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  // if (isLoading) return <Spinner />;
  // if (!booking) return <Empty resource='booking' />;
  const { id: bookingId, status } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading type="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          // <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
          <Button onClick={() => console.log("hi")}>Check out</Button>
        )}

        <Modal>
          <Modal.Toggle opens="delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Toggle>
          <Modal.Window name="delete">
            <ConfirmDelete
              resource="booking"
              // These options will be passed wherever the function gets called, and they determine what happens next
              onConfirm={(options) => deleteBooking(bookingId, options)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
