const preactCliFlow = require("preact-cli-plugin-flow");
const preactCliLodash = require("preact-cli-lodash");
const DashboardPlugin = require("webpack-dashboard/plugin");
const Visualizer = require("webpack-visualizer-plugin");

export default function(config) {
  preactCliFlow(config);
  preactCliLodash(config);

  const plugins = config.plugins;
  plugins.push(new Visualizer());
  plugins.push(new DashboardPlugin());
}
