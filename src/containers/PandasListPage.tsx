import React from 'react';
import PandasList from '../components/PandasList';
import axios, { AxiosResponse } from 'axios';
import { Panda } from '../types/Pandas';

interface Props {}

interface State {
  pandas: Panda[];
}

class PandasListPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      pandas: [],
    };
  }

  handlePress = (key: string) => {
    alert(key);
  };

  componentDidMount() {
    axios.get('http://localhost:3004/pandas').then((response: AxiosResponse) => {
      this.setState({
        pandas: response.data,
      });
    });
  }

  render() {
    const { pandas } = this.state;
    return (
      <div style={{ padding: 20 }}>
        <PandasList pandas={pandas} onPress={this.handlePress} />
      </div>
    );
  }
}

export default PandasListPage;
