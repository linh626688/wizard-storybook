/**
 *
 * FormSelectServicesStep
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Col, FormFeedback, FormGroup, Input, Row } from 'reactstrap';
import { PACKAGING_TYPES, SERVICE_TYPES } from '../../const/Constant';

const FormSelectServicesStepWrapper = styled.div`
  .border-row {
    border-bottom: 1px dotted #eeeef4;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class FormSelectServicesStep extends React.Component {

  handleOnChange = e => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  };

  render() {
    const { serviceData } = this.props;
    return (
      <FormSelectServicesStepWrapper>
        <Row className="w-100">
          <Col xs="3"/>
          <Col xs="6" className="border-row">
            <Row className="pb-5">
              <span className="label-header">
                Select your Services
              </span>
            </Row>
            <Row>
              <FormGroup className="w-100">
                <div className="pb-2">
                  <span className="label-item">Delivery Type</span>
                </div>
                <Input
                  type="select"
                  name="deliveryType"
                  id="deliveryType"
                  value={serviceData.deliveryType}
                  onChange={this.handleOnChange}>
                  <option value={SERVICE_TYPES.BASIC}>{SERVICE_TYPES.BASIC}</option>
                  <option value={SERVICE_TYPES.EXPRESS}>{SERVICE_TYPES.EXPRESS}</option>
                  <option value={SERVICE_TYPES.OVER}>{SERVICE_TYPES.OVER}</option>
                </Input>
                <FormFeedback>This field is required</FormFeedback>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className="w-100">
                <div className="pb-2">
                  <span className="label-item">Packaging Type</span>
                </div>
                <Input
                  type="select"
                  name="packagingType"
                  value={serviceData.packagingType}
                  onChange={this.handleOnChange}
                  id="packagingType">
                  <option value={PACKAGING_TYPES.REGULAR}>{PACKAGING_TYPES.REGULAR}</option>
                  <option value={PACKAGING_TYPES.OVER_SIZED}>{PACKAGING_TYPES.OVER_SIZED}</option>
                  <option value={PACKAGING_TYPES.FRAGILE}>{PACKAGING_TYPES.FRAGILE}</option>
                  <option value={PACKAGING_TYPES.FROZEN}>{PACKAGING_TYPES.FROZEN}</option>
                </Input>
                <FormFeedback>This field is required</FormFeedback>
              </FormGroup>
            </Row>
          </Col>
          <Col xs="3"/>
        </Row>
      </FormSelectServicesStepWrapper>
    );
  }
}

export default FormSelectServicesStep;
