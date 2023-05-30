module.exports = appError = (message, statusCode) => {
    const error = new Error(message);
    error.statusCode = statusCode ? statusCode : 500;
    error.stack = error.stack; 
}

// class AppError extends Error{
//     constructor(message, statusCode){
//         super(message);
//         this.statusCode = statusCode;
//         this.status = "failed";
//     }
// }