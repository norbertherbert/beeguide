---
title: Introduction
sidebar_position: 1
---

# Introduction

Abeeway tracker devices require either LoRaWAN or cellular connectivity to send location updates and other event messages to an Application Server (AS).

The Application Server is responsible for storing, processing, and visualizing the received data according to the needs of the target use case.

Please note that the Application Server is outside the scope of Abeeway's offering. It is typically developed, integrated, or customized by a third-party company.

The following sections provide a high-level overview of the typical integration flows for LoRaWAN and cellular connectivity.

## Integration with LoRaWAN connectivity

With LoRaWAN connectivity, the integration flow typically follows one of the following patterns:

> `Device` ⇒ `Gw` ⇒ `LNS` with `Driver` ⇒ `AS`  
> `Device` ⇒ `Gw` ⇒ `LNS` ⇒ `AS` with `Driver`

The components are:

- `Device`: Abeeway tracker device
- `Gw`: LoRaWAN gateway
- `LNS`: LoRaWAN Network Server
- `Driver`: the JavaScript decoder/encoder library
- `AS`: Application Server

The Driver can be hosted either on the LNS or on the AS.

If the Driver is hosted on the LNS, the AS receives decoded messages in JSON format.

If the Driver is hosted on the AS, the AS receives the device payload in encoded form and must decode it using the Driver.

The `LNS` ⇒ `AS` connection can be implemented on various protocols, depending on the capabilities of the LNS. Typical examples are HTTP and MQTT.

## Integration with Cellular connectivity

With cellular connectivity, the typical integration flow is:

> `Device` ⇒ `Cellular Network` ⇒ `AS` with `Driver`

In this case, the Driver must be hosted on the AS. The AS receives the device payload from the network in encoded form and must decode it using the Driver.

The `Cellular Network` ⇒ `AS` connection currently uses unencrypted UDP. For production deployments, a private APN is therefore recommended to secure the connection between the cellular network and the Application Server.

Abeeway plans to introduce a future firmware feature to secure UDP communication using symmetric keys. At the time of writing, this feature is not yet available.
