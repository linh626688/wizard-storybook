/**
 *
 * WizardContainer
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { Col, Row, Spinner } from 'reactstrap';

import {
  BodySteps,
  BottomSteps,
  CenteredSection,
  LoadingSpinner,
  WizardWrapper,
} from './style';
import HeaderSteps from '../../components/HeaderSteps';
import FormLocationStep from '../../components/FormLocationStep';
import CustomButton from '../../components/CustomButton';
import FormSelectServicesStep from '../../components/FormSelectServicesStep';
import FormReviewStep from '../../components/FormReviewStep';
import ModalWarning from '../../components/ModalWarning';
import { PACKAGING_TYPES, SERVICE_TYPES, TYPE_WARNING } from '../../const/Constant';
import { isEmpty } from 'lodash';

/* eslint-disable  */
export class WizardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenError: false,
      isOpenSuccess: false,
      isLoading: false,
      location: {
        addressLine: 'Cau Giay',
        postcode: '1000',
        city: 'Hanoi',
        country: 'Vietnam',
      },
      service: {
        deliveryType: SERVICE_TYPES.BASIC,
        packagingType: PACKAGING_TYPES.OVER_SIZED,
      },
      stepIdx: 0,
    };
  }

  handleClickNext = e => {
    e.preventDefault();
    if (this.validateBeforeNextStep()) {
      return;
    }
    let { stepIdx } = this.state;
    this.setState({ stepIdx: stepIdx + 1 });
  };

  handleClickPrevious = e => {
    e.preventDefault();
    let { stepIdx } = this.state;
    this.setState({ stepIdx: stepIdx - 1 });
  };

  handleModalWarning = e => {
    e.preventDefault();
    this.setState({ isOpenError: !this.state.isOpenError });
  };

  handleModalSuccess = e => {
    e.preventDefault();
    this.setState({ isOpenSuccess: !this.state.isOpenSuccess });
  };

  handleChangeLocation = (field, value) => {
    const { location } = this.state;
    location[field] = value;
    this.setState({
      location,
    });
  };

  handleChangeService = (field, value) => {
    const { service } = this.state;
    service[field] = value;
    this.setState({
      service,
    });
  };

  handleChangeStep = stepIdx => {
    if (this.validateBeforeNextStep()) {
      return;
    }
    this.setState({ stepIdx });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false, isOpenSuccess: true });
    }, 1500);
  };

  validateBeforeNextStep = () => {
    const { location } = this.state;
    let locations = Object.keys(location);
    return locations.some(item => {
      if (isEmpty(location[item])) {
        this.setState({ isOpenError: true });
        return true;
      }
    });
  };

  renderButtons = () => {
    const { stepIdx } = this.state;
    switch (stepIdx) {
      case 0:
        return (
          <Row>
            <Col style={{
              textAlign: 'right',
              paddingRight: 0,
              paddingLeft: 0,
            }}>
              <CustomButton
                size="md"
                onClick={this.handleClickNext}
                type="primary"
                name="Next"
              />
            </Col>
          </Row>
        );
      case 1:
        return (
          <Row>
            <Col style={{
              textAlign: 'left',
              paddingRight: 0,
              paddingLeft: 0,
            }}>
              <CustomButton
                onClick={this.handleClickPrevious}
                size="md"
                type="secondary"
                name="Previous"
              />
            </Col>
            <Col style={{
              textAlign: 'right',
              paddingRight: 0,
              paddingLeft: 0,
            }}>
              <CustomButton
                size="md"
                onClick={this.handleClickNext}
                type="primary"
                name="Next"
              />
            </Col>

          </Row>);
      case 2:
        return (
          <Row>
            <Col style={{
              textAlign: 'left',
              paddingRight: 0,
              paddingLeft: 0,
            }}>
              <CustomButton
                onClick={this.handleClickPrevious}
                size="md"
                type="secondary"
                name="Previous"
              />
            </Col>
            <Col style={{
              textAlign: 'right',
              paddingRight: 0,
              paddingLeft: 0,
            }}>
              <CustomButton
                size="md"
                onClick={this.handleSubmit}
                type="primary"
                name="Submit"
              />
            </Col>
          </Row>
        );
      default:
        return '';
    }
  };

  render() {
    const { isOpenError, isOpenSuccess, isLoading, location, service, stepIdx } = this.state;
    return (
      <div>
        <Helmet>
          <title>WizardContainer</title>
          <meta name="description" content="Description of WizardContainer"/>
        </Helmet>
        <WizardWrapper>
          <CenteredSection>
            <HeaderSteps currentStep={stepIdx} handleChangeStep={this.handleChangeStep}/>
            <BodySteps>
              {stepIdx === 0 &&
              <FormLocationStep
                handleChange={this.handleChangeLocation}
                locationData={location}/>
              }
              {stepIdx === 1 &&
              <FormSelectServicesStep
                handleChange={this.handleChangeService}
                serviceData={service}/>
              }
              {stepIdx === 2 &&
              <FormReviewStep data={{ location, service }}/>
              }
            </BodySteps>
            <BottomSteps>
              <Row className="w-100">
                <Col xs="3"/>
                <Col xs="6">
                  {this.renderButtons()}
                </Col>
                <Col xs="3"/>
              </Row>
            </BottomSteps>
            <ModalWarning
              isOpen={isOpenError}
              type={TYPE_WARNING.ERROR}
              toggle={this.handleModalWarning}
              body="There are some errors in your submission. Please correct them."
            />
            <ModalWarning
              isOpen={isOpenSuccess}
              type={TYPE_WARNING.SUCCESS}
              toggle={this.handleModalSuccess}
              body="The application has been successfully submitted!"
            />
            {isLoading &&
            <LoadingSpinner>
              <Spinner style={{ width: '3rem', height: '3rem' }}/>
            </LoadingSpinner>}

          </CenteredSection>
        </WizardWrapper>
      </div>
    );
  }
}

export default WizardContainer;
