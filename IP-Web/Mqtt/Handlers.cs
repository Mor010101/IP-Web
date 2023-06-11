using MQTTnet;
using MQTTnet.Client;
using MQTTnet.Extensions.ManagedClient;
using Serilog;
using System.Text;

namespace IP_Web.Mqtt;

public class Handlers
{
    
    public static void OnConnected(MqttClientConnectedEventArgs obj)
    {
        Log.Logger.Information("Successfully connected.");
    }

    public static void OnConnectingFailed(ManagedProcessFailedEventArgs obj)
    {
        Log.Logger.Warning("Couldn't connect to broker.");
    }

    public static void OnDisconnected(MqttClientDisconnectedEventArgs obj)
    {
        Log.Logger.Information("Successfully disconnected.");
    }

}
