using System.Collections.Generic;
using UnityEngine;

public interface ISensor
{
    public struct AIData
    {
        public enum dataType
        {
            STRING,
            INT,
            FLOAT16,
            FLOAT32,
        }
        public dataType type;
        public string stringData;
        public int intData;
        public float float32Data;
        public float float64Data;
    }
    public List<AIData> GetData();
}
