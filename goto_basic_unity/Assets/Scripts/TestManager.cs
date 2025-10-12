using UnityEngine;
using UnityEngine.InputSystem;

public class TestManager : MonoBehaviour
{
    public GameObject testTarget;

    private AIManager manager;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        manager = testTarget.GetComponent<AIManager>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Keyboard.current.spaceKey.wasPressedThisFrame)
        {
            Test();
        }
    }

    public void Test()
    {
        
        AIManager.AiData data = new AIManager.AiData{
                aiId = 1,
                data = "{hello:hello}",
                isTranin = true
        };
        manager.SendData(data);
    }
}
