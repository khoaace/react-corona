/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Corona';

export default defineMessages({
  refresh: {
    id: `${scope}.refresh`,
    defaultMessage: 'Làm mới',
  },
  confirmed: {
    id: `${scope}.confirmed`,
    defaultMessage: 'Ca nhiễm',
  },
  deaths: {
    id: `${scope}.deaths`,
    defaultMessage: 'Tử vong',
  },
  recovered: {
    id: `${scope}.recovered`,
    defaultMessage: 'Chữa khỏi',
  },
  world: {
    id: `${scope}.world`,
    defaultMessage: 'Thế giới',
  },
  vietnam: {
    id: `${scope}.vietnam`,
    defaultMessage: 'Việt Nam',
  },

  
});
