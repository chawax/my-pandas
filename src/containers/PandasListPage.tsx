import React from 'react';
import { connect } from 'react-redux';
import PandasList from '../components/PandasList';
import { Panda } from '../types/Pandas';

interface Props {
  pandas: Panda[];
}

class PandasListPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pandas: [],
    };
  }

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

const mapStateToProps = (state: any) => {
  return {
    pandas: state.pandas,
  };
};

export default connect(mapStateToProps)(PandasListPage);
