/**
 *
 * ModalWarning
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Modal, ModalBody } from 'reactstrap';
import { TYPE_WARNING } from '../../const/Constant';

const ModalWarningWrapper = styled.div`
  .warning-msg {
    font-weight: 400;
    font-size: 1.1rem;
    color: #74788d
  }
`;

const IconWarning = styled.div`
  font-size: 20px;
  border: 3px solid #f27474;
  text-align: center;
  border-radius: 50%;
  color: #f27474;
  font-weight: 600;
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  margin: 0 auto;
  position: relative;
  top: -2px;

  [class*='ti-'] {
    position: absolute;
    z-index: 1;
    left: 1px;
    right: 0px;
    top: 23px;
  }
`;

const IconSuccess = styled.div`
  font-size: 20px;
  border: 3px solid #a5dc86;
  text-align: center;
  border-radius: 50%;
  color: #a5dc86;
  font-weight: 600;
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  margin: 0 auto;
  position: relative;
  top: -2px;

  [class*='ti-'] {
    position: absolute;
    z-index: 1;
    left: 1px;
    right: 0px;
    top: 23px;
  }
`;

function ModalWarning(props) {
  let icon = <IconWarning className="icon-circle p-3"><i className="ti-alert"/></IconWarning>;
  switch (props.type) {
    case TYPE_WARNING.ERROR:
      icon = <IconWarning className="icon-circle p-3"><i className="ti-alert"/></IconWarning>;
      break;
    case TYPE_WARNING.SUCCESS:
      icon = <IconSuccess className="icon-circle p-3"><i className="ti-check"/></IconSuccess>;
      break;
    default:
      break;
  }
  return (
    <ModalWarningWrapper>
      <Modal isOpen={props.isOpen} toggle={props.toggle} centered>
        <ModalBody className="text-center pt-5">
          {icon}
          <div className="pt-3 text-center">
            <span className="warning-msg">{props.body}</span>
          </div>
        </ModalBody>
        <div className="text-center p-3">
          <Button color="secondary" onClick={props.toggle}>
            OK
          </Button>
        </div>
      </Modal>
    </ModalWarningWrapper>
  );
}

ModalWarning.propTypes = {};

export default ModalWarning;
