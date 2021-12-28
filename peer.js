//from hnasr tute

const localConnection = new RTCPeerConnection()
 

localConnection.onicecandidate = e =>  {
console.log(" NEW ice candidate!! on localconnection reprinting SDP " )
 console.log(JSON.stringify(localConnection.localDescription))
}


const sendChannel = localConnection.createDataChannel("sendChannel");
 sendChannel.onmessage =e =>  console.log("messsage received!!!"  + e.data )
   sendChannel.onopen = e => console.log("open!!!!");
     sendChannel.onclose =e => console.log("closed!!!!!!");


localConnection.createOffer().then(o => localConnection.setLocalDescription(o) )