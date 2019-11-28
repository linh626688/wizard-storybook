/**
 *
 * FormReviewStep
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';

const FormReviewStepWrapper = styled.div`
  .border-row {
    border-bottom: 1px dotted #eeeef4;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class FormReviewStep extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <FormReviewStepWrapper>
        <Row className="w-100">
          <Col xs="3"/>
          <Col xs="6" className="">
            <Row className="pb-5">
              <span className="label-header">Review your Details and Submit</span>
            </Row>

            <Row className="head-label-item pt-3">Current Address</Row>
            <Row className="label-item">{data.location.addressLine}</Row>
            <Row className="label-item">{data.location.postcode}</Row>
            <Row className="label-item">{data.location.city}</Row>
            <Row className="label-item">{data.location.country}</Row>
            <Row className="border-row pb-3"/>

            <Row className="head-label-item pt-3">Delivery Service Type</Row>
            <Row className="label-item">{data.service.deliveryType}</Row>
            <Row className="label-item">{data.service.packagingType}</Row>
            <Row className="border-row pb-3"/>
          </Col>
          <Col xs="3"/>
        </Row>
      </FormReviewStepWrapper>
    );
  }
}

FormReviewStep.propTypes = {};

export default FormReviewStep;
