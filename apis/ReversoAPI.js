import Reverso from 'reverso-api';

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36';
const fromLanguage = 'english';
const toLanguage = 'ukrainian';
const reverso = new Reverso({ headers: { 'User-Agent': userAgent } })

async function translate(str) {
  try {
    const result = await reverso.getTranslation(
      str, fromLanguage, toLanguage);

    if (result.translations && result.translations.length > 0) {
      return result.translations[0];
    } else {
      return null;
    }
  } catch {
    return null;
  }

  return null;
}

async function synonyms(str) {
  try {
    const result = await reverso.getSynonyms(str, fromLanguage);

    if (result.synonyms && result.synonyms.length > 0) {
      return result.synonyms.slice(0, 5).map(i => i.synonym);
    } else {
      return null;
    }
  } catch {
    return null;
  }

  return null;
}

export { translate, synonyms };