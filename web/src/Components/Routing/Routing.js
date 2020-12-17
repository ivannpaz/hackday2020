import 'beautiful-react-diagrams/styles.css';
import Diagram, { createSchema, useSchema }  from 'beautiful-react-diagrams';

const axios = require('axios').default;

// the diagram model
const initialSchema = createSchema({
    nodes: [
      { id: 'node-1', content: 'Node 1', coordinates: [10, 10], },
      { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
      { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
      { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
      { id: 'node-5', content: 'Node 4', coordinates: [400, 200], },
      { id: 'node-6', content: 'Node 4', coordinates: [400, 200], },
    ],
    links: [
      { input: 'node-1',  output: 'node-2' },
      { input: 'node-1',  output: 'node-3' },
      { input: 'node-1',  output: 'node-4' },
      { input: 'node-4',  output: 'node-5' },
      { input: 'node-4',  output: 'node-6' },
    ]
  });

  function Routing() {
    // create diagrams schema
    const [schema, { onChange }] = useSchema(initialSchema);

    return (
      <div style={{ height: '22.5rem' }}>
        <Diagram schema={schema} onChange={onChange} />
      </div>
    );
  };

  export default Routing
