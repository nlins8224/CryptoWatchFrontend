const CracoLessPlugin = require('craco-less');

const componentPrimaryBackground = '#15191C'
const componentSecondaryBackground = '#151616'
const componentThirdBackground = '#212121'
const primaryColor = '#00C7B0'
const secondaryColor = '#85B5FA'
const primaryText = '#00C7B0'
const secondaryText = '#E1E1E1'
const buttonColor = '#00665a'

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@component-background': componentThirdBackground,
              '@primary-color': primaryColor,
              '@body-background': componentSecondaryBackground,
              '@text-color': primaryText,
              '@text-color-secondary': secondaryText,
              '@table-bg': componentPrimaryBackground,
              '@table-header-bg': componentPrimaryBackground,
              '@table-header-color': secondaryText,
              '@table-row-hover-bg': componentSecondaryBackground,
              '@table-border-color': componentSecondaryBackground,
              '@table-body-sort-bg': componentPrimaryBackground,
              '@tabs-card-head-background': componentSecondaryBackground,
              '@tabs-card-active-color': componentPrimaryBackground,
              '@page-header-ghost-bg': componentPrimaryBackground,
              '@label-color': secondaryText,
              '@label-required-color': secondaryColor,
              'btn-primary-bg': buttonColor,
              '@layout-body-background': componentSecondaryBackground,
              '@layout-header-background': componentSecondaryBackground,
              '@menu-bg': componentSecondaryBackground,
              '@menu-dark-item-active-bg': componentSecondaryBackground,
              '@menu-dark-highlight-color': primaryColor
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};