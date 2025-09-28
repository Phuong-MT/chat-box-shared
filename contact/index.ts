export class Contacts {
  static GroupType = {
    DIRECT: 'DIRECT',
    GROUP: 'GROUP',
  };
  //
  static RoleGroupMembers = {
    ADMIN: 'ADMIN',
    MANAGEMENT: 'MANAGEMENT',
    MEMBER: 'MEMBER',
  };
  static MimeTypeFile = {
    // Ảnh
    IMAGE_PNG: 'image/png',
    IMAGE_JPEG: 'image/jpeg',
    IMAGE_GIF: 'image/gif',

    // PDF
    PDF: 'application/pdf',

    // Word
    DOC: 'application/msword',
    DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

    // Excel
    XLS: 'application/vnd.ms-excel',
    XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

    // PowerPoint
    PPT: 'application/vnd.ms-powerpoint',
    PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  };
  static jwt = {
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
  };
}
