// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import CenteredTree from './CenteredTree';

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div id="treeWrapper" style={{width: '100%', height: '100%'}}>

//         <CenteredTree />

//       </div>
//     );
//   }
// }

import Tree from 'react-tree-graph';

let data = {
	name: 'Parent',
	children: [{
		name: 'Child One'
	}, {
		name: 'Child Two'
	}]
};

<Tree
	data={data}
	height={400}
  width={400}
  />;

// ========================================

ReactDOM.render(
  <Tree />,
  document.getElementById('root')
);
