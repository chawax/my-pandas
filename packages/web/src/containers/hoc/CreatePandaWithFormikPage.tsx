import { AppState, Panda, slice as pandasSlice } from '@pandas/core';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Dispatch } from 'redux';
import CreatePandaForm, { FormValues as PandaFormValues } from '../../components/CreatePandaFormik';

interface PropsFromState {}

interface PropsFromDispatch {
  createPanda(panda: Panda): void;
}

type Props = RouteComponentProps & PropsFromState & PropsFromDispatch;

class CreatePandaWithFormikPage extends React.Component<Props> {
  handleCancel = () => {
    this.props.history.replace('/hoc/pandas');
  };

  handleSubmit = (values: PandaFormValues) => {
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
    createPanda: (panda: Panda) => dispatch(pandasSlice.actions.createPandaRequest(panda)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreatePandaWithFormikPage));
