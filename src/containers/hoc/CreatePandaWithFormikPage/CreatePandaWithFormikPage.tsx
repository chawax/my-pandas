import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Dispatch } from 'redux';
import { CreatePandaWithFormik, FormValues as CreatePandaFormValues } from '../../../components/CreatePandaWithFormik';
import { AppState, slice as pandasSlice } from '../../../redux';
import { Panda } from '../../../types';

interface PropsFromState {}

interface PropsFromDispatch {
  createPanda(panda: Panda): void;
}

type Props = RouteComponentProps & PropsFromState & PropsFromDispatch;

class CreatePandaWithFormikPage extends React.Component<Props> {
  handleCancel = () => {
    this.props.history.replace('/hoc/pandas');
  };

  handleSubmit = (values: CreatePandaFormValues) => {
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
          <CreatePandaWithFormik onSubmit={this.handleSubmit} onCancel={this.handleCancel} />
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
