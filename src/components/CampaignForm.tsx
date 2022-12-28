import React, { useState } from 'react';

interface CampaignFormProps {
  onSubmit: (campaign: Campaign) => void;
}

export interface Campaign {
  name: string;
  budget: number;
  targetAudience: string;
  goal: CampaignGoal;
}

enum CampaignGoal {
  Reach = 'Reach',
  Conversion = 'Conversion',
  Views = 'Views',
  Sales = 'Sales',
  LeadGeneration = 'Lead Generation',
  AppDownload = 'App Download',
}

const CampaignForm: React.FC<CampaignFormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<Campaign>({
    name: '',
    budget: 0,
    targetAudience: '',
    goal: CampaignGoal.Reach,
  });

  /** 

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }; 
  
  */

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Campaign Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formState.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="budget">Budget:</label>
      <input
        type="number"
        id="budget"
        name="budget"
        value={formState.budget}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="targetAudience">Target Audience:</label>
      <input
        type="text"
        id="targetAudience"
        name="targetAudience"
        value={formState.targetAudience}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="goal">Campaign Goal:</label>
      <select
        id="goal"
        name="goal"
        value={formState.goal}
        onChange={handleChange}
      >
        {Object.values(CampaignGoal).map(goal => (
          <option key={goal} value={goal}>
            {goal}
          </option>
        ))}
      </select>
      <br />
      <button type="submit">Create Campaign</button>
    </form>
  );
};
export default CampaignForm;
/*import * as React from 'react';
import { Form, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal } from 'antd';


const { Option } = Select;


interface Props {
 onSubmit : (values: any) => {
    axios.post('/api/campaigns', values)
      .then((response) => {
        // Navigate to the AdGroup creation page
        navigate('/ad-groups/create');
      })
      .catch((error) => {
        // Display an error message
        Modal.error({
          title: 'Error',
          content: 'There was an error creating the campaign. Please try again.',
        });
      });
  };
}
const CampaignGoalForm: React.FC<Props> = ({ onSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    onSubmit(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Campaign Goal" name="goal" rules={[{ required: true }]}>
        <Select>
          <Option value="reach">Reach</Option>
          <Option value="conversion">Conversion</Option>
          <Option value="views">Views</Option>
          <Option value="sales">Sales</Option>
          <Option value="lead_generation">Lead Generation</Option>
          <Option value="app_download">App Download</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Campaign
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CampaignGoalForm;
*/