const errorResponse = (
    error:any
) => {
    // console.log(error)
    return {
        error: error.message
    }
}

export default errorResponse