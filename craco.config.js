const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@context": path.resolve(__dirname, "./src/context/"),
      "@domains": path.resolve(__dirname, "./src/domains/"),
      "@utility": path.resolve(__dirname, "./src/utility/"),
      "@hoc": path.resolve(__dirname, "./src/hoc/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@store": path.resolve(__dirname, "./src/store/"),
    },
  },
};
