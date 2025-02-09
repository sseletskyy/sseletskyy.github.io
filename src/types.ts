export type ProcessedFile =
  | {
      name: string;
      success: true;
      message?: never;
    }
  | {
      name: string;
      success: false;
      message: string;
    };
