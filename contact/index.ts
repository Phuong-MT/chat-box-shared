export enum NAME_SPACE_SOCKET {
    CHAT_BOX = "chat-box",
    CHAT_MESSAGE_SCREEN = "chat-message-screen",
}

export class Contacts {
    static GroupType = {
        DIRECT: "DIRECT",
        GROUP: "GROUP",
    };
    //
    static RoleGroupMembers = {
        ADMIN: "ADMIN",
        MANAGEMENT: "MANAGEMENT",
        MEMBER: "MEMBER",
    };
    static MimeTypeFile = {
        // Ảnh
        IMAGE_PNG: "image/png",
        IMAGE_JPEG: "image/jpeg",
        IMAGE_GIF: "image/gif",

        // PDF
        PDF: "application/pdf",

        // Word
        DOC: "application/msword",
        DOCX: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

        // Excel
        XLS: "application/vnd.ms-excel",
        XLSX: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

        // PowerPoint
        PPT: "application/vnd.ms-powerpoint",
        PPTX: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    };
    static jwt = {
        ACCESS_TOKEN: "access_token",
        REFRESH_TOKEN: "refresh_token",
    };

    static SUBSCRIBE_MESSAGE = {
        CHAT_MESSAGE_SCREEN: {
            JOIN_LIVE_GROUPCHAT: `${NAME_SPACE_SOCKET.CHAT_MESSAGE_SCREEN}/join-group-chat`,
            LEAVE_LIVE_GROUPCHAT: `${NAME_SPACE_SOCKET.CHAT_MESSAGE_SCREEN}/leave-group-chat`,
            SEND_MESSAGE: `${NAME_SPACE_SOCKET.CHAT_MESSAGE_SCREEN}/send-message`,
            LISTEN_MESSAGE: `${NAME_SPACE_SOCKET.CHAT_MESSAGE_SCREEN}/listen-message`,
        },
    };
}
