import React from 'react';
import { connect } from 'react-redux';
import PandasList from '../components/PandasList';
import { State } from '../redux/types';
import { Panda } from '../types/Pandas';

interface Props {
  pandas: Panda[];
}

class PandasListPage extends React.Component<Props> {
  handleSelectPanda = (key: string) => {
    alert(key);
  };

  render() {
    const { pandas } = this.props;
    return (
      <div style={{ padding: 20 }}>
        <PandasList pandas={pandas} onSelectPanda={this.handleSelectPanda} />
      </div>
    );
  }
}

const mapStateToProps = (state: State): Props => {
  return {
    pandas: state.pandas,
  };
};

export default connect(mapStateToProps)(PandasListPage);
