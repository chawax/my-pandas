import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import { Dispatch } from 'redux';
import PandasList from '../components/PandasList';
import pandas from '../pandas';
import { loadPandasSuccess } from '../redux/pandas/actions';
import { getPandas } from '../redux/pandas/selectors';
import { AppState } from '../redux/store';
import { Panda } from '../types/Pandas';

interface PropsFromState {
  pandas: Panda[];
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

  render() {
    const { pandas } = this.props;
    return (
      <div style={{ padding: 20 }}>
        {pandas ? <PandasList pandas={pandas} onSelectPanda={this.handleSelectPanda} /> : <Spinner color="primary" />}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): PropsFromState => {
  return {
    pandas: getPandas(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => {
  return {
    loadPandas: () => dispatch(loadPandasSuccess(pandas)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PandasListPage);
