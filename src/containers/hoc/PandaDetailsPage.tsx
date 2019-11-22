import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import PandaDetails from '../../components/PandaDetails';
import { findPanda } from '../../redux/pandas/selectors';
import { AppState } from '../../redux/store';
import { Panda } from '../../types/Pandas';

interface PropsFromState {
  panda: Panda | undefined;
}

interface PathParamsType {
  id: string;
}

type Props = RouteComponentProps<PathParamsType> & PropsFromState;

class PandaDetailsPage extends React.Component<Props> {
  handleClose = () => {
    this.props.history.replace('/');
  };

  render() {
    const { panda } = this.props;
    return (
      <>
        <div style={{ padding: 20 }}>{panda ? <PandaDetails panda={panda} onClose={this.handleClose} /> : null}</div>
      </>
    );
  }
}

const mapStateToProps = (state: AppState, props: Props): PropsFromState => {
  return {
    panda: findPanda(state, props.match!.params.id),
  };
};

export default connect(mapStateToProps)(withRouter(PandaDetailsPage));
