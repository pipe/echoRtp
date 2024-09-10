# echoRtp
An experiment with the RTPTransport APIs.
Uses a browser to show incoming video and forward it to a whip server without re-encoding the frames.

In future it may require you to start your (chrome canary) browser like this

./Google Chrome Canary --force-fieldtrials=WebRTC-Bwe-InjectedCongestionController/Enabled --enable-blink-features=RTCRtpTransport
