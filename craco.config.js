const CracoLessPlugin = require('craco-less');

const componentPrimaryBackground = '#21212D'
const componentSecondaryBackground = '#15191C'
const primaryColor = '#00C7B0'
const primaryText = '#00C7B0'
const secondaryText = '#FFFFFF'

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': primaryColor,
              '@body-background': componentSecondaryBackground,
              '@text-color': primaryText,
              '@text-color-secondary': primaryText,
              '@table-bg': componentPrimaryBackground,
              '@table-header-bg': componentPrimaryBackground,
              '@table-header-color': secondaryText,
              '@table-row-hover-bg': componentSecondaryBackground,
              '@table-border-color': componentSecondaryBackground,
              '@tabs-card-head-background': componentSecondaryBackground,
              '@tabs-card-active-color': componentPrimaryBackground,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};