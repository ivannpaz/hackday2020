import React from 'react';
import ReactDOM from 'react-dom';
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];

class MyComponent extends React.Component {
  render() {
    return (
      <div id="treeWrapper" style={{width: '100%', height: '100%'}}>

        <Tree data={myTreeData} />

      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);
