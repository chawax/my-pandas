import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Alert, Button, Spinner } from 'reactstrap';
import { Dispatch } from 'redux';
import PandasList from '../../components/PandasList';
import { AppState, getError, getPandas, isFetching, slice as pandasSlice } from '../../redux';
import { Panda } from '../../types';

interface PropsFromState {
  pandas: Panda[];
  fetching: boolean;
  error?: Error;
}

interface PropsFromDispatch {
  loadPandas(): void;
}

type Props = RouteComponentProps & WithTranslation & PropsFromState & PropsFromDispatch;

class PandasListPage extends React.Component<Props> {
  handleSelectPanda = (key: string) => {
    this.props.history.push('/hoc/pandas/' + key);
  };

  handleNewPandaWithReduxForm = () => {
    this.props.history.push('/hoc/createPandaWithReduxForm');
  };

  handleNewPandaWithFormik = () => {
    this.props.history.push('/hoc/createPandaWithFormik');
  };

  handleHome = () => {
    this.props.history.replace('/');
  };

  componentDidMount() {
    this.props.loadPandas();
  }

  handleRetry = () => {
    this.props.loadPandas();
  };

  renderError = () => {
    const { error, t } = this.props;
    return (
      <div>
        <Alert color="danger">{error!.message}</Alert>
        <Button color="secondary" onClick={this.handleRetry}>
          {t('common.retry')}
        </Button>
      </div>
    );
  };

  render() {
    const { pandas, fetching, error, t } = this.props;
    return (
      <>
        <div style={{ padding: 20 }}>
          {fetching && <Spinner color="primary" />}
          {error && this.renderError()}
          {pandas && (
            <>
              <PandasList pandas={pandas} onSelectPanda={this.handleSelectPanda} />
              <Button
                color="primary"
                style={{ marginTop: 10, marginRight: 10 }}
                onClick={this.handleNewPandaWithReduxForm}
              >
                {t('pandasList.addWithReduxForm')}
              </Button>
              <Button
                color="primary"
                style={{ marginTop: 10, marginRight: 10 }}
                onClick={this.handleNewPandaWithFormik}
              >
                {t('pandasList.addWithFormik')}
              </Button>
              <Button color="secondary" style={{ marginTop: 10 }} onClick={this.handleHome}>
                {t('common.home')}
              </Button>
            </>
          )}
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
    loadPandas: () => dispatch(pandasSlice.actions.loadPandasRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withTranslation()(PandasListPage)));
