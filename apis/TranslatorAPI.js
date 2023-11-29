import translatte from 'translatte';

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36';
const fromLanguage = 'en';
const toLanguage = 'uk';

async function translator(srt) {
  try {
    const result = await translatte(srt, {
      from: fromLanguage,
      to: toLanguage,
      agents: [ userAgent ]
    });

    if (result.text) {
      return result.text;
    } else {
      return null;
    }
  } catch {
    return null;
  }

  return null;
}

export default translator;