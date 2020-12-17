import React from "react";
import Tree from "react-d3-tree";

const myTreeData = [
  {
    name: 'Top Level',
    children: [
      {
        name: 'Level 2: A'
      },
      {
        name: 'Level 2: B',
        children: [
          {
            name: 'subleveling'
          }
        ]
      },
    ],
  },
];

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 10,
    height: 10,
    x: -5,
    y: -5,
  }
}

const containerStyles = {
  width: '100%',
  height: '100vh',
}

export default class CenteredTree extends React.PureComponent {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: 20
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          translate={this.state.translate}
          orientation={'vertical'}
          data={myTreeData}
          zoomable={true}
          nodeSvgShape={svgSquare}
        />
      </div>
    );
  }
}
