import React from 'react';
import Header from '@/layout/Header';
import FormCampaign from '@/pages/Campaign/FormCampaign';

const AddCampaign = () => {
  return (
    <>
      <Header title="Add Campaign" />
      <main>
        <FormCampaign />
      </main>
    </>
  );
};

export default AddCampaign;
