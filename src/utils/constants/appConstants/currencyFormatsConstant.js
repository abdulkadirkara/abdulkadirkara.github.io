const activeCountryCodeByCurrency = "tr";

const CURRENCY_FORMATS = {
  tr: {
    numericFormatCompProps: {
      currencyFormatProps: {
        decimalSeparator: ",",
        thousandSeparator: ".",
        prefix: "₺",
      },
      currencySettingProps: {
        decimalScale: 2,
        fixedDecimalScale: true,
      },
    },

    formatCurrencyMethodProps: {
      locale: "tr-TR",
      currency: "TRY",
    },
  },
  en: {},
};

export const activeCountryNumaricFormatCompProps = {
  ...CURRENCY_FORMATS[activeCountryCodeByCurrency].numericFormatCompProps
    .currencyFormatProps,
  ...CURRENCY_FORMATS[activeCountryCodeByCurrency].numericFormatCompProps
    .currencySettingProps,
};
