import { Stack, Typography } from "@mui/material"

interface IErrorMessage {
    message?: string,
}

const ErrorMessage = ({message}: IErrorMessage) => {
  return (
    <Stack 
        display={'flex'} 
        justifyContent={'center'} 
        flexDirection={'column'}
        alignItems={'center'}
        margin={'auto'}>
            <Typography variant="h5">{message}{'Произошла ошибка'}</Typography>
        </Stack>
  )
}

export default ErrorMessage
