import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the wizardContainer state domain
 */

const selectWizardContainerDomain = state =>
  state.get('wizardContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by WizardContainer
 */

const makeSelectWizardContainer = () =>
  createSelector(selectWizardContainerDomain, substate => substate.toJS());

export default makeSelectWizardContainer;
export { selectWizardContainerDomain };
