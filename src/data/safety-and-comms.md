---
title: System Communication and Safety
---

## System communication

A Core Board microcontroller sits at the centre of the vessel's communications. It
carries RF teleoperation traffic as MAVLINK messages over a 900 MHz radio link, manages
CAN communications with the batteries and actuators, and exposes the whole lot to the
autonomy stack as ROS topics. A separate kill board independently controls the motor
isolation relays and the status lights. The vessel operates in four modes: linkloss,
stop, manual, and autonomous.

## Communication architecture

Three buses tie the systems together. Ethernet and USB connect the sensors to the host
computers through a hub and an onboard switch. Two CAN buses, port and starboard, link
the battery and engine modules back through the core board.

Shore communication runs on two links. A 900 MHz ISM-band radio modem pair handles
teleoperation and the emergency kill switch, chosen for compliance with both Australian
and United States regulations. For high-bandwidth data, a point-to-point 5 GHz Wi-Fi
link using Ubiquiti Rocket M5 modems carries the load.

## Propeller shrouds

Competition regulations require propeller shrouds to protect anyone in the water near
the vessel. The team designed and manufactured its own in-house at Flinders: rolled
aluminium tubes secured to PVC brackets, fastened with 316 stainless steel and aluminium
hardware chosen to resist corrosion in seawater.

## Emergency stop system

Four IP67-rated IDEM emergency stops replaced the earlier units, mounted on acetal
faceplates at points that stay reachable from the water and from a support boat. The
installation uses M20 cable glands for environmental sealing and G316 stainless fasteners
with nyloc nuts, so that weathering and constant vibration do not back them out.
