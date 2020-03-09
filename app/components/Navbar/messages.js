/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.Navbar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'App',
  },
  english: {
    id: `${scope}.english`,
    defaultMessage: 'Tiếng anh',
  },
  vietnamese: {
    id: `${scope}.vietnamese`,
    defaultMessage: 'Tiếng việt',
  }
});
