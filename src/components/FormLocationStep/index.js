/**
 *
 * FormLocationStep
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'reactstrap';
import TextInputField from '../TextInputField';
import { isEmpty } from 'lodash';

export const FormLocationStepWrapper = styled.div`
  .border-row {
    border-bottom: 1px dotted #eeeef4;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class FormLocationStep extends React.Component {
  handleOnChange = (name, value) => {
    this.props.handleChange(name, value);
  };

  render() {
    const { locationData } = this.props;
    return (
      <FormLocationStepWrapper>
        <Row className="w-100">
          <Col xs="3"/>
          <Col xs="6" className="border-row">
            <Row className="pb-5">
              <span className="label-header">
                Setup Your Current Location</span>
            </Row>
            <Row>
              <TextInputField
                label="Address Line"
                placeHolder="Address Line"
                name="addressLine"
                type="text"
                value={locationData.addressLine}
                subLabel="Please enter your address"
                isError={isEmpty(locationData.addressLine)}
                onChange={this.handleOnChange}
              />
            </Row>
            <Row>
              <TextInputField
                label="Postcode"
                placeHolder="postcode"
                name="postcode"
                type="text"
                subLabel="Please enter your postcode"
                isError={isEmpty(locationData.postcode)}
                value={locationData.postcode}
                onChange={this.handleOnChange}
              />
            </Row>
            <Row>
              <TextInputField
                label="City"
                placeHolder="city"
                name="city"
                type="text"
                subLabel="Please enter your city"
                isError={isEmpty(locationData.city)}
                value={locationData.city}
                onChange={this.handleOnChange}
              />
            </Row>
            <Row>
              <TextInputField
                label="Country"
                placeHolder="country"
                name="country"
                type="text"
                subLabel="Please enter your Country"
                isError={isEmpty(locationData.country)}
                value={locationData.country}
                onChange={this.handleOnChange}
              />
            </Row>
          </Col>
          <Col xs="3"/>
        </Row>
      </FormLocationStepWrapper>
    );
  }
}

FormLocationStep.propTypes = {};

export default FormLocationStep;
