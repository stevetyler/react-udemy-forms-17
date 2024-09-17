export default {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  setupFilesAfterEnv: ['./jest-setup.js'],
};