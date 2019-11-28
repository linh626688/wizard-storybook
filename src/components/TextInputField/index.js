/**
 *
 * TextInputField
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FormGroup,
  Input,
  FormFeedback,
  FormText,
} from 'reactstrap';

const TextInputFieldWrapper = styled.div`
  width: 100%;
  .error-label {
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #fd397a;
  }
  .input-style {
    width: 100%;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class TextInputField extends React.Component {
  handleChange = e => {
    const { name, value } = e.target;
    this.props.onChange(name, value);
  };

  render() {
    const { isError, name, type, label, subLabel, placeHolder, value } = this.props;
    return (
      <TextInputFieldWrapper>
        <FormGroup>
          <div className="pb-2">
            <span className="label-item">{label}</span>
          </div>
          <Input
            invalid={isError}
            className="input-style"
            placeholder={placeHolder}
            onChange={this.handleChange}
            name={name}
            value={value}
            type={type}
          />
          <FormFeedback>This field is required</FormFeedback>
          <FormText className="err-label-item">{subLabel}</FormText>
        </FormGroup>
      </TextInputFieldWrapper>
    );
  }
}

TextInputField.propTypes = {};

export default TextInputField;
