import publicKey from './public.pem?raw';

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
    publicKey,
};

export const appPath = '.LNXSRVLauncher';

export const discordRPC = {
    appId: '1418944833443070063',
    default: {
        firstLineText: 'LNXSRV Launcher',
        secondLineText: 'Prekol?',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'LNXSRV Launcher',
        smallImageText: 'Minecraft',
    },
    profile: {
        firstLineText: 'Выбираю тестируемый профиль игры',
        secondLineText: 'Загружаю {server}',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'LNXSRV Launcher',
        smallImageText: 'Minecraft',
    },
    game: {
        firstLineText: 'Играю на тестовом сервере',
        secondLineText: 'Играю за {nickname}',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ',
            },
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'LNXSRV Launcher',
        smallImageText: 'Minecraft',
    },
};
