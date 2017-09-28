import { gql } from 'react-apollo';

import { user as userFragment } from '../fragments/user';

export const employees = gql`
  query {
    user {
      ...UserData
    }
  }
  ${userFragment}
`;
