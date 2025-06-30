const plugin = {
  rules: {
    'icon-filename-case': {
      create(context) {
        const filename = context.getFilename();
        if (!filename.includes('/components/icons/')) return {};
        const fileName = filename.split('/').pop().split('.')[0];
        if (fileName[0] !== fileName[0].toUpperCase()) {
          context.report({
            node: context.getSourceCode().ast,
            message: 'Icon component filenames must start with an uppercase letter',
          });
        }
        return {};
      },
    },
  },
};

module.exports = plugin; 