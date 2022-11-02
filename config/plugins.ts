module.exports = () => {
  return {
    ckeditor: true,

      // ...
  deepl: {
    enabled: true,
    seo: {
      enabled: true,
    },
    config: {
      // your DeepL API key
      apiKey: '5eacf1fc-fbac-2105-2fc0-1176e9cb2258:fx',
      // whether to use the free or paid api, default true
      freeApi: true,
      // Which field types are translated (default string, text, richtext, components and dynamiczones)
      translatedFieldTypes: [
        'string',
        'text',
        'richtext',
        'component',
        'dynamiczone',
      ],
      // If relations should be translated (default true)
      translateRelations: true,
      // You can define a custom glossary to be used here (see https://www.deepl.com/docs-api/managing-glossaries/)
      glossaryId: 'customGlossary',
    },
  },
  // ...
  }

}
