export type LanguageCode =
    | "af"
    | "am"
    | "ar"
    | "az"
    | "be"
    | "bg"
    | "bn"
    | "bs"
    | "ca"
    | "ceb"
    | "co"
    | "cs"
    | "cy"
    | "da"
    | "de"
    | "el"
    | "en"
    | "eo"
    | "es"
    | "et"
    | "eu"
    | "fa"
    | "fi"
    | "fr"
    | "fy"
    | "ga"
    | "gd"
    | "gl"
    | "gu"
    | "ha"
    | "haw"
    | "he"
    | "hi"
    | "hmn"
    | "hr"
    | "ht"
    | "hu"
    | "hy"
    | "id"
    | "ig"
    | "is"
    | "it"
    | "iw"
    | "ja"
    | "jw"
    | "ka"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "ku"
    | "ky"
    | "la"
    | "lb"
    | "lo"
    | "lt"
    | "lv"
    | "mg"
    | "mi"
    | "mk"
    | "ml"
    | "mn"
    | "mr"
    | "ms"
    | "mt"
    | "my"
    | "ne"
    | "nl"
    | "no"
    | "ny"
    | "or"
    | "pa"
    | "pl"
    | "ps"
    | "pt"
    | "ro"
    | "ru"
    | "rw"
    | "sd"
    | "si"
    | "sk"
    | "sl"
    | "sm"
    | "sn"
    | "so"
    | "sq"
    | "sr"
    | "st"
    | "su"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "tg"
    | "th"
    | "tk"
    | "tl"
    | "tr"
    | "tt"
    | "ug"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "xh"
    | "yi"
    | "yo"
    | "zh"
    | "zu";

export interface GoogleTranslateResponse {
    data: {
        translations: Array<{translatedText: string; detectedSourceLanguage?: LanguageCode}>;
    };
}