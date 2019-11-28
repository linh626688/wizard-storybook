/**
 *
 * HeaderSteps
 *
 */

import React from 'react';
import HeaderStepsItem from '../HeaderStepsItem';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';

const HeaderStepsWrapper = styled.div`
  border-bottom: 1px solid #eeeef4;
`;

/* eslint-disable react/prefer-stateless-function */
class HeaderSteps extends React.Component {

  handleClickStep = idx => {
    this.props.handleChangeStep(idx);
  };

  render() {
    const { currentStep } = this.props;
    return (
      <HeaderStepsWrapper>
        <Row>
          <Col xs={4}>
            <HeaderStepsItem
              name="Location"
              icon="ti-map-alt"
              stepIdx={0}
              onClickStep={this.handleClickStep}
              currentStep={currentStep}/>
          </Col>
          <Col xs={4}>
            <HeaderStepsItem
              name="Select Service"
              icon="ti-package"
              stepIdx={1}
              onClickStep={this.handleClickStep}
              currentStep={currentStep}/>
          </Col>
          <Col xs={4}>
            <HeaderStepsItem
              name="Review"
              icon="ti-check-box"
              stepIdx={2}
              onClickStep={this.handleClickStep}
              currentStep={currentStep}/>
          </Col>
        </Row>
        {/*<HeaderStepsItem name="type" icon="2" idx={2}/>*/}
        {/*<HeaderStepsItem name="facilities" icon="3" idx={3}/>*/}
      </HeaderStepsWrapper>
    );
  }
}

HeaderSteps.propTypes = {};

export default HeaderSteps;
