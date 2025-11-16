class EmojiCode {
    static EmojiCode = {
        // FACES
        ":)": "😊",
        ":D": "😄",
        ":P": "😛",
        ";)": "😉",
        ":(": "☹️",
        ":'(": "😢",
        T_T: "😭",
        o_o: "😳",
        ":O": "😮",
        ":/": "😕",
        ":|": "😐",
        "^_^": "😊",
        ":3": "😺",
        ">:(": "😠",
        ">:-(": "😡",
        // KAOMOJI
        "(>_<)": "😣",
        "(T_T)": "😭",
        "(o_o)": "😳",
        "(¬_¬)": "😒",
        "(=_=)": "😑",
        "(>///<)": "😳",
        "(._.)": "😔",
        "(•‿•)": "😄",
        "(づ｡◕‿‿◕｡)づ": "🤗",
        "(^_^)": "😊",
        // HANDS
        ":+1": "👍",
        "-1:": "👎",
        "o/": "👋",
        "\\o//": "🙌",
        "<ok>": "👌",
        xf: "🤞",
        "*clap*": "👏",
        "m/": "🤙",
        "v/": "✌️",
        "o|": "✋",
        "<<": "🤌",
        ">>": "🤌",
        "@>": "👉",
        "<@": "👈",
        "**5": "🙏",

        // HEARTS & SYMBOLS
        "<3": "❤️",
        "</3": "💔",
        "<33": "💕",
        "<333": "💞",
        "*love*": "💖",
        "!!": "❗",
        "???": "❓",
        "*star*": "⭐",
        "*fire*": "🔥",
        "++": "✨",
        "~~": "💫",
    };
    static getRegexPattern(): RegExp {
        const escapedKeys = Object.keys(this.EmojiCode)
            .sort((a, b) => b.length - a.length)
            .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        return new RegExp(escapedKeys.join("|"), "g");
    }
    static getEmojiIcon() {
        return this.EmojiCode;
    }
}

export const parseEmojiCode = (text: string): string => {
    const output = text.replace(EmojiCode.getRegexPattern(), (match) => EmojiCode.EmojiCode[match]);
    return output;
};

export const getEmojiIcon = () => {
    return EmojiCode.getEmojiIcon();
};
