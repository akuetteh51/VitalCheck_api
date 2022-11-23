import sys
import json
import enum
import datetime
import logging
import time
import urllib
import urllib.parse
from . import httphelper
from . import runtime

class OAuthToken:
    def __init__(self, initData):
        self.token_type = None
        self.scope = None
        self.expires_in = None
        self.access_token = None
        self.refresh_token = None
        if isinstance(initData, dict):
            for key in initData:
                setattr(self, key, initData[key])

def getMicrosoftGraphOAuthToken() -> OAuthToken:
    resultDict = runtime.OperationMethodUtility.invoke(runtime.OperationMethods.getMicrosoftGraphOAuthToken)
    ret = OAuthToken(resultDict)
    return ret

def getImplicitGrantFlowOAuthToken(authEndpoint: str, clientId: str, scope: str) -> OAuthToken:
    resultDict = runtime.OperationMethodUtility.invoke(runtime.OperationMethods.getImplicitGrantFlowOAuthToken, { "authEndpoint": authEndpoint, "clientId": clientId, "scope": scope} )
    ret = OAuthToken(resultDict)
    return ret

def getAuthorizationCode(authEndpoint: str, clientId: str, scope: str) -> str:
    result = runtime.OperationMethodUtility.invoke(runtime.OperationMethods.getAuthorizationCode, { "authEndpoint": authEndpoint, "clientId": clientId, "scope": scope} )
    ret = result
    return ret

def getDeviceFlowOAuthToken(authEndpoint: str, clientId: str, scope: str) -> OAuthToken:
    request = httphelper.RequestInfo()
    request.method = "POST"
    request.url = authEndpoint + "/devicecode"
    request.headers["CONTENT-TYPE"] = "application/x-www-form-urlencoded"
    request.body = urllib.parse.urlencode({'client_id': clientId, 'scope': scope})
    response = httphelper.HttpUtility.invoke(request)
    if response.statusCode != 200:
        raise runtime.Utility.createRuntimeError(runtime.ErrorCodes.generalException)
    responseObj = json.loads(response.body)

    if not isinstance(responseObj, dict):
        raise runtime.Utility.createRuntimeError(runtime.ErrorCodes.generalException)
    
    propNames = ['device_code', 'user_code', 'verification_uri', 'expires_in', 'interval', 'message']
    for propName in propNames:
        if propName not in responseObj:
            raise runtime.Utility.createRuntimeError(runtime.ErrorCodes.generalException)
    
    verificationUri = responseObj['verification_uri']
    userCode = responseObj['user_code']
    print(responseObj['message'])
    print(f'Please access {verificationUri} and type {userCode}')

    expires = 0
    while expires < responseObj['expires_in']:
        time.sleep(responseObj['interval'])
        request = httphelper.RequestInfo()
        request.method = "POST"
        request.url = authEndpoint + "/token"
        request.headers["CONTENT-TYPE"] = "application/x-www-form-urlencoded"
        request.body = urllib.parse.urlencode(
            {
                'grant_type': 'urn:ietf:params:oauth:grant-type:device_code',
                'client_id': clientId,
                'device_code': responseObj['device_code']
            })
        response = httphelper.HttpUtility.invoke(request)
        if response.statusCode == 200:
            ret = OAuthToken(json.loads(response.body))
            return ret
        
        errorResponseObj = json.loads(response.body)
        if errorResponseObj['error'] != 'authorization_pending':
            raise runtime.Utility.createRuntimeError(runtime.ErrorCodes.generalException, errorResponseObj['error_description'])
        print('Waiting for authentication finish...')
        expires += responseObj['interval']
   
    raise runtime.Utility.createRuntimeError(runtime.ErrorCodes.timeout)


def testGetMicrosoftGraphOAuthToken() -> None:
    oauthToken = getMicrosoftGraphOAuthToken()
    testGetFiles(oauthToken)

def testGetImplicitGrantFlowOAuthToken() -> None:
    oauthToken = getImplicitGrantFlowOAuthToken("https://login.microsoftonline.com/common/oauth2/v2.0/authorize", "9ee7f99d-c5b3-4f5f-810a-708848a1c566", "https://graph.microsoft.com/Files.ReadWrite")
    testGetFiles(oauthToken)

def testGetAuthorizationCode() -> None:
    code = getAuthorizationCode("https://login.microsoftonline.com/common/oauth2/v2.0/authorize", "9ee7f99d-c5b3-4f5f-810a-708848a1c566", "https://graph.microsoft.com/Files.ReadWrite")
    print(code)

def testGetFiles(oauthToken: OAuthToken) -> str:
    requestInfo = httphelper.RequestInfo()
    requestInfo.method = "GET"
    requestInfo.url = "https://graph.microsoft.com/v1.0/me/drive/root/children"
    requestInfo.headers["Content-Type"] = "application/json"
    requestInfo.headers["Accept"] = "application/json"
    requestInfo.headers["Authorization"] = "Bearer " + oauthToken.access_token
    responseInfo = httphelper.HttpUtility.invoke(requestInfo)
    print(responseInfo.body)

def testGetDeviceFlowOAuthToken() -> None:
    oauthToken = getDeviceFlowOAuthToken("https://login.microsoftonline.com/common/oauth2/v2.0", "7833c94f-f400-4d80-8de4-fa89a0d21af0", "https://graph.microsoft.com/Files.ReadWrite")
    testGetFiles(oauthToken)


if __name__ == "__main__":
    request = runtime.OperationMethodUtility.buildInputChannelRequestMessage(runtime.OperationMethods.getMicrosoftGraphOAuthToken)
    response = runtime.OperationMethodUtility.buildInputChannelResponseMessage({"token_type": "Bearer", "access_token": "Foo"})
    runtime.Utility.setInputChannelMock(request, response)
    oauthToken = getMicrosoftGraphOAuthToken()
    print(oauthToken.access_token)

    testGetDeviceFlowOAuthToken()
