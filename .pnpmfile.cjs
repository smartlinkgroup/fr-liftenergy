function readPackage(pkg, context) {
  const overrides = {
    "http-proxy-middleware": "^3.0.3",
    "vite": "^7.2.0",
    "webpack-dev-server": "^5.2.4", 
    "undici": "^7.24.0",
    "uuid": "^11.1.1",              
    "glob": "^11.0.0",
    "rimraf": "^5.0.10"
  };

  for (const [name, version] of Object.entries(overrides)) {
    if (pkg.dependencies && pkg.dependencies[name]) {
      pkg.dependencies[name] = version;
    }
    if (pkg.devDependencies && pkg.devDependencies[name]) {
      pkg.devDependencies[name] = version;
    }
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
};