class EmojiCode {
    static EmojiCode: Record<string, string> = {
        ":)": "😊",
        ":-)": "😊",
        "=)": "😊",
        "(:": "😊",

        ":D": "😁",
        ":-D": "😁",
        xD: "😆",
        XD: "😆",

        ";)": "😉",
        ";-)": "😉",

        "<3": "❤️",
        "^_^": "😊",

        ":*": "😘",
        ":-*": "😘",

        ":(": "😢",
        ":-(": "😢",
        ")(": "😢",

        T_T: "😭",
        TT_TT: "😭",
        ":'(": "😭",

        ":O": "😮",
        ":o": "😮",
        ":-O": "😮",

        ":P": "😛",
        ":-P": "😛",
        xp: "😝",
        XP: "😝",

        ">:(": "😡",
        ">:-(": "😡",

        ":|": "😐",
        ":-|": "😐",

        ":/": "😕",
        ":\\": "😕",
        ":-/": "😕",

        O_O: "😲",
        o_O: "😳",
        O_o: "😳",
    };

    static getRegexPattern(): RegExp {
        // Escape ký tự đặc biệt trong key để dùng trong regex
        const escapedKeys = Object.keys(this.EmojiCode).map((k) =>
            k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        );
        return new RegExp(escapedKeys.join("|"), "g");
    }
}

export const parseEmojiCode = (text: string): string => {
    return text.replace(EmojiCode.getRegexPattern(), (match) => EmojiCode.EmojiCode[match]);
};
