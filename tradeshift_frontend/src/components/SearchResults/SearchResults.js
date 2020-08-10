import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import "../../App.css";
import "./SearchResults.scss";

const SearchResults = props => {
  const [visible, setVisible] = useState(false);
  const [currentResult, setCurrentResult] = useState(props.resultData[0]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { buttonLabel, className } = props;

  useEffect(() => {
    if (props.resultData.length > 1 && props.resultData[0].name.length !== "") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, props.resultData);

  const updateModalData = element => {
    setCurrentResult(element);
    toggle();
  };

  const visibleOrNot = () => {
    if (visible) {
      return (
        <div>
          <p>
            {" "}
            Search results for <b>"{props.searchInput}"</b>
              {props.code === "Please Select" ? (
                <span></span>
              ) : (
                <span> in <b>"{props.code}"</b></span>
              )}
          </p>
          <div className="cardsContainer">
            {props.resultData.map(element => (
              <Card
                onClick={() => updateModalData(element)}
                key={element.id}
                body
                outline
                color="secondary"
                className="cardStyling"
              >
                <CardTitle>{element.name}</CardTitle>
                <CardText>{element.address}</CardText>
              </Card>
            ))}
          </div>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{currentResult.name}</ModalHeader>
            <ModalBody className="modalBodyStyling">
              <b>Company Registration Number:</b>
              <span>{currentResult.registrationNumber}</span>
              <b>Vat Number:</b>
              <span>{currentResult.vatNumber}</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  };

  return <div className="searchResultsContainer">{visibleOrNot()}</div>;
};

export default SearchResults;
