/**
 *
 * Asynchronously loads the component for WizardContainer
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
