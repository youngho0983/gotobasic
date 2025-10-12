using System.Threading.Tasks;
using NativeWebSocket;
using UnityEngine;

public class WsManager : MonoBehaviour
{
    private WebSocket websocket;
    
    async public Task<bool> Connect()
    {
        bool isConnect = false;
        
        websocket = new WebSocket("ws://127.0.0.1:8000/ws");
        SetOnEvents();
        
        await websocket.Connect();

        return isConnect;
    }
    
    private void SetOnEvents()
    {
        websocket.OnOpen += () =>
        {
            Debug.Log("Connected to AIAPI server");
        };

        websocket.OnError += (errMsg) =>
        {
            Debug.LogError($"WebSocket Error: {errMsg}");
        };

        websocket.OnClose += (closeCode) =>
        {
            Debug.Log($"Connection closed: {closeCode}");
        };

        websocket.OnMessage += (bytes) =>
        {
            string message = System.Text.Encoding.UTF8.GetString(bytes);
            Debug.Log($"Received: {message}");
        };
    }
    
    async void Start()
    {
        
    }

    private async Task<bool> SendMessageLoop()
    {
        bool isSend = false;
        if (websocket.State == WebSocketState.Open)
        {
            await websocket.SendText("ping from Unity");
            Debug.Log("📤 Sent: ping from Unity");
            isSend = true;
        }
        return isSend;
    }

    public async Task<bool> SendMessageSocket(string message)
    {
        bool isSend = false;
        if (websocket.State == WebSocketState.Open)
        {
            await websocket.SendText(message);
            Debug.Log("📤 Sent: ping from Unity");
            isSend = true;
        }
        else
        {
            Debug.Log("Fail Sent: ping from Unity not Open");
            
        }
        return isSend;
    }

    private void Update()
    {
#if !UNITY_WEBGL || UNITY_EDITOR
        websocket?.DispatchMessageQueue();
#endif
    }

    private async void OnApplicationQuit()
    {
        if (websocket != null)
            await websocket.Close();
    }
}
