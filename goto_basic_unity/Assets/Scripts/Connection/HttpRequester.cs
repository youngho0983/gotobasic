using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using UnityEditor.PackageManager.Requests;
using UnityEditor.ShaderGraph.Serialization;
using UnityEngine;
using UnityEngine.Networking;

public class HttpRequester
{
    private const string BASE_URL = "http://127.0.0.1:8000";

    public struct RequestQuery
    {
        public string name;
        public string value;
    }

    public  static IEnumerator GetRequest(List<RequestQuery> queryList,System.Action onSuccess, System.Action onFail, string sub_url = "")
    {
        StringBuilder sb = new StringBuilder();
        sb.Append(BASE_URL).Append("/").Append(sub_url);
        
        for (int i = 0; i < queryList.Count; i++)
        {
            if (i != 0)
            {
                sb.Append('&');
            }
            else
            {
                sb.Append('?');
            }
            sb.Append(queryList[i].name).Append('=').Append(queryList[i].value);
        }
        
        UnityWebRequest request = UnityWebRequest.Get(sb.ToString());
        yield return request.SendWebRequest();

        if (request.isNetworkError || request.isHttpError)
        {
            Debug.Log(request.error);
            onFail();
        }
        else
        {
            Debug.Log("testSuccess");
            Debug.Log(request.downloadHandler.text);
            onSuccess();
        }
    }
}
