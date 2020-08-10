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
  const [currentResult, setCurrentResult] = useState([]);
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

  const activeModalOrNot = () => {
      if(currentResult !== []) {
          return (
            <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{currentResult.name}</ModalHeader>
            <ModalBody className="modalBodyStyling">
              <b>Company Registration Number:</b>
              <span>{currentResult.registrationNumber}</span>
              <b>Vat Number:</b>
              <span>{currentResult.vatNumber}</span>
              <b>Registered Address</b>
              <span>{currentResult.address}</span>
              <b>Additional Status Details</b>
                  <span>{currentResult.additionalStatusDetails}</span>
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
          )
      }
  }
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
            {activeModalOrNot()}
          </div>

        </div>
      );
    }
  };

  return <div className="searchResultsContainer">{visibleOrNot()}</div>;
};

export default SearchResults;
