
let copyreader = null;
let recvtrans = null;
addEventListener("rtctransform", (event) => {
    console.log("transformer worker...");
    if (event.transformer.options.name == "recvTransform") {
        console.log("worker recv side")
        let readers = event.transformer.readable.tee();
        copyreader = readers[1];
        recvtrans = event.transformer;
        readers[0].pipeTo(event.transformer.writable); // send to local
    }
    if (event.transformer.options.name == "sendTransform"){
        console.log("worker send side")
        copyreader.pipeTo(event.transformer.writable);
        recvtrans.sendKeyFrameRequest();
    }
});