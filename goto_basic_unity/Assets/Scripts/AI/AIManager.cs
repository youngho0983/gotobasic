using System;
using UnityEngine;

public class AIManager : MonoBehaviour
{
    
    [SerializeField]
    private WsManager wsManager;
    
    [Serializable]
    public class AiData
    {
        public int aiId;
        public string data;
        public bool isTranin;
    }
    
    private void Start()
    {
        wsManager.Connect();
    }

    private void Update()
    {
        
    }


    public async void SendData(AiData data)
    {
        string strData = JsonUtility.ToJson(data);
        await wsManager.SendMessageSocket(strData);

        Debug.Log("dataSended");
    }
}
