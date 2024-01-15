import { useEffect, useState } from "react";
import { Container, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cart from "./cart";

export default function Sidebar(showP) {
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if(showP){
      handleShow();
    }
    else{
      handleClose();
    }
  }, [showP])
  return (
    <div>

      <Offcanvas place show={show} placement="end" onHide={handleClose} >
        <Container style={{ paddingLeft: '40px', display: 'flex', paddingTop: '40px', marginBottom: '0px' }}>
          <h5>SHOPPING CART</h5>
          <div style={{ display: 'flex' }}>
            <h5 style={{ paddingLeft: '90px', paddingRight: '8px', color: 'gray', cursor: 'pointer' }} onClick={handleClose}>close</h5>
            <div style={{ color: 'gray', paddingTop: '0px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </div>
          </div>
        </Container>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
