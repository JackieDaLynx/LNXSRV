import token from './public.pem';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'LNXSRV',
};

export const api = {
    ws: 'ws://195.133.84.125:1370/ws',
    web: 'http://195.133.84.125:1370',
    // extraToken: token,
};

export const appPath = '.LNXSRV';
