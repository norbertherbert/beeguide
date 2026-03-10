---
title: Uplink Messages
sidebar_position: 1
---

# Uplink Messages

Abeeway devices can send different uplink message types depending on what they need to report. The list below gives a quick overview of the main message types. The examples are only there to illustrate each type and are not exhaustive.

## Uplink Message Types

### Notification Messages

Notification messages are sent when the device detects an event or a change of state.

- System notifications such as low battery or tamper detection
- SOS notifications
- Temperature alerts
- Motion-related notifications
- Network status notifications
- Geozoning notifications

### Position Messages

Position messages are used to report location data collected by the device.

- GNSS location data
- Wi-Fi scan reports
- BLE scan reports

### Query Messages

Query messages are sent when the device needs additional information to operate more efficiently.

- Echo requests used for cellular connectivity checks
- GPS/BeiDou almanac update requests used for assisted GNSS

### Response Messages

Response messages are sent by the device after certain downlink commands.

- Configuration set responses
- Configuration get responses
- BLE connectivity status responses

## Further Reading

- [Uplink payload format description](https://docs.thingpark.com/thingpark-location/firmware/application-uplink)
- [Payload examples](https://github.com/actility/device-catalog/blob/main/vendors/abeeway/drivers/asset-tracker-3/examples.json)
- [JavaScript encoder/decoder](https://www.npmjs.com/package/abeeway-asset-tracker-driver-v3)
