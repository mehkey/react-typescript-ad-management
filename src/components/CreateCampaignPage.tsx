import React from 'react';
import CampaignForm from './CampaignForm';
import {Campaign} from './CampaignForm';
//import '../../public/assets/css/extra.css';

const CreateCampaignPage: React.FC = () => {
  const handleSubmit = (campaign: Campaign) => {
    // Send the campaign data to the server to create the advertising campaign
  };

  return <CampaignForm onSubmit={handleSubmit} />;
};

export default CreateCampaignPage;