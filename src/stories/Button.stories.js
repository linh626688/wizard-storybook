import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomButton from '../../src/components/CustomButton';
import {storiesOf} from "@storybook/react";


storiesOf('BUTTON', module)
  .add('CustomButton', () =>
    <CustomButton
      size="md"
      onClick={action('clicked')}
      type="primary"
      name="Submit"
    />
  );
