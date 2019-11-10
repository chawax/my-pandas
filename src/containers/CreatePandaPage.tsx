import React from 'react';
import CreatePandaForm, { FormData as CreatePandaFormData } from '../components/CreatePandaForm';

class CreatePandaPage extends React.Component {
  handleCancel = () => {
    console.log('cancel');
  };

  handleSubmit = (values: CreatePandaFormData) => {
    console.log('submit : ', values);
  };

  render() {
    return (
      <>
        <div style={{ padding: 20 }}>
          <CreatePandaForm onSubmit={this.handleSubmit} onCancel={this.handleCancel} />
        </div>
      </>
    );
  }
}

export default CreatePandaPage;
