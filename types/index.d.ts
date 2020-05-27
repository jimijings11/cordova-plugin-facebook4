interface FacebookConnectPlugin {
    /** Get the version of Cordova running on the device. */
    /** Indicates that Cordova initialize successfully. */
    getLoginStatus(onSuccess: (dict:Result) => void,
    onError: (err: string) => void):void;

    /** login to Facebbok 
     *  @param  permission Array strings of permissions 
     * @param onSuccess function success
     * @param onError Function failure*/
    login(permission:[string], onSuccess: (dict:Result) => void,
    onError: (err: string) => void):void;
    getAccessToken(onSuccess: (token:string) => void,
    onError: (err: string) => void):void;
    logEvent(permissions:[string]):void;
    logPurchase(permissions:[string]):void;
    checkHasCorrectPermissions(permissions:[string]):void;
    logout(onSuccess: () => void, onError: (err: string) => void):void;
    api(path:string,permissions:[string], onSuccess: (dict:Result) => void,
    onError: (err: string) => void):void;
    showDialog(options:ShowDialogOptions, onSuccess: (dict:Result) => void,
    onError: (err: string) => void):void;
    getDeferredApplink(permissions:[string]):void;
    activateApp(permissions:[string]):void;
}

interface ShowDialogOptions {
    name:string;
    message:string;
    caption:string;
    description:string;
    href:string;
    picture:string;
    quote:string;
}



interface Result {
    status: string;
    authResponse: AuthResponse;
  }

interface AuthResponse {
    session_key: boolean;
    accessToken: string;
    expiresIn: number;
    sig: string;
    secret: string;
    userID: string;
  }
  
declare var facebookConnectPlugin: FacebookConnectPlugin;