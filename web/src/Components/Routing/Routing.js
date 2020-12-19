import React, { useMemo } from "react";
import { Group } from "@visx/group";
import { Tree, hierarchy } from "@visx/hierarchy";
import { LinkHorizontal } from "@visx/shape";
import { LinearGradient } from "@visx/gradient";

const peach = "#fd9b93";
const pink = "#fe6e9e";
const blue = "#03c0dc";
const green = "#26deb0";
const plum = "#71248e";
const lightpurple = "#374469";
const white = "#ffffff";
export const background = "#272b4d";

/** Handles rendering Root, Parent, and other Nodes. */
function Node({ node }) {
  const width = 160;
  const height = 30;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const isRoot = node.depth === 0;
  const isParent = !!node.children;

  if (isRoot) return <RootNode node={node} />;
  if (isParent) return <RoutingNode node={node} />;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={lightpurple}
        stroke={plum}
        strokeWidth={0}
        strokeDasharray="2,2"
        strokeOpacity={0.6}
        rx={10}
        onClick={() => {
          console.log("Entering for", node.data.description)
        }}
      />
      <text
        dy=".33em"
        fontSize={10}
        fontFamily="Arial"
        textAnchor="middle"
        fill={green}
        style={{ pointerEvents: "none" }}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

function RootNode({ node }) {
  return (
    <Group top={node.x} left={node.y}>
      <circle r={48} fill="url('#lg')" />
      <text
        dy=".24em"
        fontSize={12}
        fontFamily="Arial"
        textAnchor="middle"
        fontWeight="bold"
        style={{ pointerEvents: "none" }}
        fill={plum}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

class RoutingNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { node } = this.props;
    const width = 140;
    const height = 32;
    const centerX = -width / 2;
    const centerY = -height / 2;

    const incr = 15
    var pos = 0

    var matchers = Object.keys(node.data.matchers).map(function(keyName, keyIndex) {
      var val = <tspan key={keyIndex} x="0" y={pos}>{keyName + ": " + node.data.matchers[keyName]}</tspan>
      pos += incr
      return val
    })

    return (
      <Group top={node.x} left={node.y}>
        <rect
          height={height}
          width={width}
          y={centerY}
          x={centerX}
          fill={background}
          stroke={blue}
          strokeWidth={0}
          onClick={() => {
            console.log("Entering for", node.data.description)
          }}
          onMouseEnter={() => {
            //
          }}
          onMouseLeave={() => {
            //
          }}
        />

        <text
          dy=".33em"
          fontSize={10}
          fontFamily="Roboto"
          textAnchor="middle"
          style={{ pointerEvents: "none" }}
          fill={white}
        >
          {matchers}
        </text>

      </Group>
    );
  }
}

const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };

function Routing({ rawTree, width, height, margin = defaultMargin }) {
    // eslint-disable-next-line
  const data = useMemo(() => hierarchy(rawTree), []);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <LinearGradient id="lg" from={peach} to={pink} />
      <rect width={width} height={height} rx={14} fill={background} />
      <Tree root={data} size={[yMax, xMax]}>
        {(tree) => (
          <Group top={margin.top} left={margin.left}>
            {tree.links().map((link, i) => (
              <LinkHorizontal
                key={`link-${i}`}
                data={link}
                stroke={lightpurple}
                strokeWidth="1"
                fill="none"
              />
            ))}
            {tree.descendants().map((node, i) => (
              <Node key={`node-${i}`} node={node} />
            ))}
          </Group>
        )}
      </Tree>
    </svg>
  );
}

export default Routing;
