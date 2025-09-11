/**
 * This is really ugly... We render the SVG by hand (including alpinejs logic
 * :() because alpinejs can't handle <template x-for> within an SVG element. A
 * polyfill exists, but it doesn't work in our case because the SVG itself is
 * rendered as part of an x-for.
 */

/**
 * Also, refactor this, straight-up vibecode copy-pasta. Particulary should use
 * a viewbox.
 */

export const renderSkillTreeSvg = (skillTree, learnedSkills = [], interactive = true, width = 100, height = 100, padding = 10) => {
  const nodes = skillTree.skills;

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  // Compute bounds
  const xs = nodes.map(n => n.position.x);
  const ys = nodes.map(n => n.position.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const scaleX = (width - 2 * padding) / (maxX - minX || 1);
  const scaleY = (height - 2 * padding) / (maxY - minY || 1);

  const lookup = Object.fromEntries(nodes.map(n => [n.id, n]));

  // Helper: transform raw coords -> svg coords
  const transform = ({ x, y }) => ({
    x: padding + (x - minX) * scaleX,
    y: height - padding - (y - minY) * scaleY // flip Y so "up" is bigger
  });

  // Draw edges
  nodes.forEach(node => {
    node.dependsOn.forEach(depId => {
      const from = transform(lookup[depId].position);
      const to = transform(node.position);

      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", from.x);
      line.setAttribute("y1", from.y);
      line.setAttribute("x2", to.x);
      line.setAttribute("y2", to.y);
      line.setAttribute("stroke-width", "0.3");

      if (learnedSkills.includes(node.id)) {
        line.setAttribute("stroke", "var(--color-primary)");
      }
      else {
        line.setAttribute("stroke", "var(--color-unselected)");
      }

      svg.appendChild(line);
    });
  });

  // Draw nodes + labels
  nodes.forEach(node => {
    const { x, y } = transform(node.position);

    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 3);

    if (learnedSkills.includes(node.id)) {
      circle.setAttribute("fill", "var(--color-primary)")
    }
    else {
      circle.setAttribute("fill", "var(--color-unselected)");
    }

    if (interactive) {
      circle.setAttribute("x-on:mouseenter", `selectSkill('${node.id}')`);
      circle.setAttribute("x-on:mouseleave", `selectSkill(null)`);
      circle.setAttribute("x-on:click", `learnSkill('${node.id}')`);
    }

    svg.appendChild(circle);

    // TODO: inspiration for the levels of a skill.
    const label = document.createElementNS(svgNS, "text");
    label.setAttribute("x", x);
    label.setAttribute("y", y - 15);
    label.setAttribute("text-anchor", "middle");
    label.textContent = node.id;
    //svg.appendChild(label);
  });

  return svg;
}
