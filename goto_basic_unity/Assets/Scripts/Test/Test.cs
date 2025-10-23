using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.Networking;

public class Test : MonoBehaviour
{
    private void Start()
    {
        List<HttpRequester.RequestQuery> list = new List<HttpRequester.RequestQuery>();
        list.Add(new HttpRequester.RequestQuery(){name = "id",value = "1"});
        list.Add(new HttpRequester.RequestQuery(){name = "id",value = "2"});
        list.Add(new HttpRequester.RequestQuery(){name = "id",value = "3"});
        list.Add(new HttpRequester.RequestQuery(){name = "id",value = "4"});
        list.Add(new HttpRequester.RequestQuery(){name = "id",value = "5"});
        list.Add(new HttpRequester.RequestQuery(){name = "id",value = "6"});
        StartCoroutine(HttpRequester.GetRequest(list, () => { }, () => { }, "test"));
    }


    // Update is called once per frame
    void Update()
    {
        
    }
}
