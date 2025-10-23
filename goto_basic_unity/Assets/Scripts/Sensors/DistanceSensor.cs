using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.EventSystems;

public class DistanceSensor : MonoBehaviour , ISensor
{
    private void Update()
    {
        GetDistance();
    }

    public List<ISensor.AIData> GetData()
    {
        var temp = new List<ISensor.AIData>();
        temp.Add(GetDistance());
        return temp;
    }

    private ISensor.AIData GetDistance()
    {
        Physics.Raycast(transform.position, transform.forward, out RaycastHit hit, 1000f);
        
        return new ISensor.AIData(){float32Data = hit.distance, type = ISensor.AIData.dataType.FLOAT32};

    }
}
