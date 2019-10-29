import React from 'react';
import PandasList from '../components/PandasList';
import pandas from '../pandas';

interface Props {}

class PandasListPage extends React.Component<Props> {
  handlePress = (key: string) => {
    alert(key);
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <PandasList pandas={pandas} onPress={this.handlePress} />
      </div>
    );
  }
}

export default PandasListPage;
