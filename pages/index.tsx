import type { NextPage } from "next"
import { useAppStateContext } from "../context/contextProvider";



const Home: NextPage = () => {
    //@ts-ignore
    const { huddleClient } = useAppStateContext()

    const joinCall = async (roomId: string, address: string, ens: string) => {
        await huddleClient.join(roomId, // roomId
            {
                address,
                ens,
                wallet: undefined
            });
    }

    const enableMic = async () => {
        huddleClient.enableMic()
    }

    const muteMic = async () => {
        await huddleClient.muteMic()
    }


    return <div className="flex flex-col gap-5">

        <button onClick={() => joinCall("rDVjHUcf4X", "0xED5A704De64Ff9699dB62d09248C8d179bb77D8A", "saditya.lens")} className="bg-white rounded text-black w-40 h-20">
            Join Call
        </button>
        <button onClick={enableMic} className="bg-white rounded text-black w-40 h-20">
            Enable Mic
        </button>
        <button onClick={muteMic} className="bg-white rounded text-black w-40 h-20">
            Mute Mic
        </button>
    </div>
}

export default Home
