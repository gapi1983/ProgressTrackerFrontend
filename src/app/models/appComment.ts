export interface AppComment {
    commentId: string;  // Guid in .NET → string in TS
    taskId: string;
    userId: string;
    userName: string; 
    content: string;
    createdAt: Date;
}