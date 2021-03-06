const React = require("react");
const GL = require("gl-react");
const glslify = require("glslify");

const shaders = GL.Shaders.create({
  mix: {
    frag: glslify(`${__dirname}/mix.frag`)
  }
});

module.exports = GL.createComponent(
  ({ m, children: [ t1, t2 ] }) =>
  <GL.Node
    ref="mix"
    shader={shaders.mix}
    uniforms={{ m, t1, t2 }}
  />
  , { displayName: "Mix" });
