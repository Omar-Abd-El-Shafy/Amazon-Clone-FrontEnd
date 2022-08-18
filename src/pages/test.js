import React from 'react';
import { useAddReviewMutation } from '../../Redux/Api';

const AddReview = () => {
  const { data, isLoading, isError } = useAddReviewMutation();

  return <div>AddReview</div>;
};

export default AddReview;
