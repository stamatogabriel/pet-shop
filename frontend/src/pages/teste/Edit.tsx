import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
  id: string
}

interface EditUsersProps extends RouteComponentProps<RouteParams> {}

const EditUsers: React.FC<EditUsersProps> = ({ match: { params: { id } } }) => {
  return <div />;
}

export default EditUsers;