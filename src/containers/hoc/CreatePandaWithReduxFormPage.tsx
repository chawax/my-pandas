import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Dispatch } from 'redux';
import CreatePandaForm, { FormData as CreatePandaFormData } from '../../components/CreatePandaForm';
import { createPandaRequest } from '../../redux/pandas';
import { AppState } from '../../redux/store';
import { Panda } from '../../types/Pandas';

interface PropsFromState {}

interface PropsFromDispatch {
  createPanda(panda: Panda): void;
}

type Props = RouteComponentProps & PropsFromState & PropsFromDispatch;

class CreatePandaWithReduxFormPage extends React.Component<Props> {
  handleCancel = () => {
    this.props.history.replace('/hoc/pandas');
  };

  handleSubmit = (values: CreatePandaFormData) => {
    const panda = {
      name: values.name,
      interests: values.interests.split(','),
      image: values.image,
    };
    this.props.createPanda(panda);
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

const mapStateToProps = (state: AppState): PropsFromState => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => {
  return {
    createPanda: (panda: Panda) => dispatch(createPandaRequest(panda)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreatePandaWithReduxFormPage));
