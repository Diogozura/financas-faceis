import nookies, { parseCookies } from 'nookies'
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_WEEK = ONE_DAY * 7

export interface SnackbarMessage {
  message: string;
  key: number;
}

export interface State {
  open: boolean;
  snackPack: readonly SnackbarMessage[];
  messageInfo?: SnackbarMessage;
}


export default function PremisionCookie(ctx) {


 
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    nookies.set(ctx, 'auth_cookie', 'true', {
      maxAge: ONE_WEEK,
      path: '/',
    })
    setOpen(false);
  };
  React.useEffect(() => {
    const cookies = nookies.get(ctx)
  console.log()
    if (cookies.auth_cookie !== 'true') {
      setOpen(true);
    }
  }, [ctx])

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="info" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="large"
        aria-label="close"
        color="info"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <div>
        {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={action}
        >
          <Alert severity="warning">2esestechnology.com.br pede seu consentimento para usar seus dados pessoais para:
            Seus dados pessoais serão processados e as informações do seu dispositivo (cookies, identificadores exclusivos e outros dados do dispositivo) podem ser armazenadas, acessadas e compartilhadas com fornecedores terceirizados ou usadas especificamente por este site ou aplicativo.<Button onClick={handleClick}>Aceitar</Button><Button color='error' onClick={handleClose}>Não aceitar</Button></Alert>
        </Snackbar>
      </div>
    </>
  )
}