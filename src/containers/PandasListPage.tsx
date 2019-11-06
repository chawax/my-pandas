import React from 'react';
import { connect } from 'react-redux';
import { Spinner, Alert, Button } from 'reactstrap';
import { Dispatch } from 'redux';
import PandasList from '../components/PandasList';
import { loadPandasRequest } from '../redux/pandas/actions';
import { getPandas, isFetching, getError } from '../redux/pandas/selectors';
import { AppState } from '../redux/store';
import { Panda } from '../types/Pandas';

interface PropsFromState {
  pandas: Panda[];
  fetching: boolean;
  error?: Error;
}

interface PropsFromDispatch {
  loadPandas(): void;
}

type Props = PropsFromState & PropsFromDispatch;

class PandasListPage extends React.Component<Props> {
  handleSelectPanda = (key: string) => {
    alert(key);
  };

  componentDidMount() {
    this.props.loadPandas();
  }

  handleRetry = () => {
    this.props.loadPandas();
  };

  renderError = () => {
    const { error } = this.props;
    return (
      <div>
        <Alert color="danger">{error!.message}</Alert>
        <Button color="secondary" onClick={this.handleRetry}>
          Réessayer
        </Button>
      </div>
    );
  };

  render() {
    const { pandas, fetching, error } = this.props;
    return (
      <>
        <div style={{ padding: 20 }}>
          {fetching && <Spinner color="primary" />}
          {error && this.renderError()}
          {pandas && <PandasList pandas={pandas} onSelectPanda={this.handleSelectPanda} />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: AppState): PropsFromState => {
  return {
    pandas: getPandas(state),
    fetching: isFetching(state),
    error: getError(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => {
  return {
    loadPandas: () => dispatch(loadPandasRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PandasListPage);
