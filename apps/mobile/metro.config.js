/* eslint-disable @typescript-eslint/no-require-imports */
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { join, resolve } = require("path");

const config = getDefaultConfig(__dirname);

const projectRoot = __dirname;
const workspaceRoot = join(__dirname, "..", "..");

config.watchFolders = [workspaceRoot];

config.resolver.nodeModulesPaths = [
  resolve(projectRoot, "node_modules"),
  resolve(workspaceRoot, "node_modules"),
];

module.exports = withNativeWind(config, { input: "./app/global.css" });
