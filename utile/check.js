export const checkJaLanguage = ({ title = "" }) => {
    const hiragana = /[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]/mu;
    const katakana = /[\u{3000}-\u{301C}\u{30A1}-\u{30F6}\u{30FB}-\u{30FE}]/mu;
    const kanji = /([\u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?)/mu;

    const hasHiragana = hiragana.test(title)
    const hasKatakana = katakana.test(title)
    const hasKanji = kanji.test(title)

    return hasHiragana || hasKatakana || hasKanji;
};

export const checkTwitterUrl = ({ url = "" }) => {
    const isWebUrl = new RegExp('https?://[\w/:%#\$&\?\(\)~\.=\+\-]+');
    const isTwitter = url.match(/twitter.com/);
    return isWebUrl && isTwitter;
}

export const checkTikTokUrl = ({ url = "" }) => {
    const isWebUrl = new RegExp('https?://[\w/:%#\$&\?\(\)~\.=\+\-]+');
    const isTwitter = url.match(/tiktok.com/);
    return isWebUrl && isTwitter;
}

export const checkWebUrl = ({ url = "" }) => {
    const isWebUrl = new RegExp('https?://[\w/:%#\$&\?\(\)~\.=\+\-]+');
    const isTwitter = url.match(/tiktok.com/);
    return isWebUrl && isTwitter;
}
