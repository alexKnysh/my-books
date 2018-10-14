import * as React from 'react';
import { Sidebar } from 'primereact/sidebar';

interface State {
  isVisible: boolean;
}

interface Props {
  visible: boolean;
  onShow(value: boolean): void;
}

export class NavMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { visible } = this.props;
    this.state = { isVisible: visible };
  }

  componentDidUpdate(prevProps: Props) {
    const { visible } = this.props;
    const prevVisible = prevProps.visible;

    if (visible !== prevVisible) {
      this.setState({ isVisible: visible });
    }
  }

  onHide() {
    this.setState({ isVisible: false });
    this.props.onShow(false);
  }

  render() {
    const onHide = this.onHide.bind(this);
    const { isVisible } = this.state;
    return (
      <Sidebar visible={isVisible} onHide={onHide}>
        <h1>My book</h1>
      </Sidebar>
    );
  }
}
