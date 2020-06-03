interface FacebookConnectPlugin {
    /** Get the version of Cordova running on the device. */
    /** Indicates that Cordova initialize successfully. */
    getLoginStatus(onSuccess: (dict) => void,
    onError: (err: string) => void):void;

    /** login to Facebbok 
     *  @param  permission Array strings of permissions 
     * @param onSuccess function success
     * @param onError Function failure*/
    login(permission:[string], onSuccess: (dict:Result) => void,
    onError: (err: string) => void):void;
    getAccessToken(onSuccess: (token:string) => void,
    onError: (err: string) => void):void;
    logEvent(eName:string,permissions:[string],valueToSum,onSuccess: (dict) => void,
    onError: (err: string) => void):void;
    logPurchase(value,currency,onSuccess: (dict) => void,
    onError: (err: string) => void):void;
    checkHasCorrectPermissions(permissions:[string], onSuccess: (dict) => void,
    onError: (err: string) => void):void;
    logout(onSuccess: (response) => void, onError: (err: string) => void):void;
    api(path:string,permissions:[string], onSuccess: (dict) => void,
    onError: (err: string) => void):void;
    showDialog(options:ShowDialogOptions, onSuccess: (dict) => void,
    onError: (err: string) => void):void;
    getDeferredApplink(onSuccess: (dict) => void,
    onError: (err: string) => void):void;
    activateApp(onSuccess: (dict) => void,
    onError: (err: string) => void):void;
}

interface ShowDialogOptions {
    method:string;
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