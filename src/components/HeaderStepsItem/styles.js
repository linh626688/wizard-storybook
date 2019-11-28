import styled from 'styled-components';

export const HeaderStepsItemWrapper = styled.div`
  .icon-header {
    font-size: 20px;
    border: 3px solid #f3f2ee;
    text-align: center;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.2);
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
  }
  .wizard-steps {
    max-width: 150px;
    min-height: 150px;
    max-height: 150px;
    cursor: pointer;
    .middle-vertical {
      position: absolute;
      padding-top: 100%;
    }
    .checked-color {
      color: #007bff;
    }
    .checked-color-border {
      border: 3px solid #007bff;
      color: #007bff;
    }
    .arrow-right {
      font-weight: bold;
      font-size: 25px;
    }
  }
`;
