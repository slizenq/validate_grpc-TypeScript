export enum FormStatus {
    Sending = 'Sending',
    Sent = 'Sent',
    Error = 'Error',
  }
  
  // domain/form-error.ts
  export class FormError {
    private constructor(private readonly message: string) {}
  
    public static fromMessage(message: string): FormError {
      return new FormError(message);
    }
  
    public GetMessage(): string {
      return this.message;
    }
  }