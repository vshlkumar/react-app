module.exports = {
    babel: {
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              '~': './src',
              '@components': './src/components/index.ts',
              '@stores': './src/store/index.ts',
            },
          },
        ],
      ],
    },
  };
  
  