class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors =[],
        stackck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors


        if(stackck){
            this.stack = stackck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}