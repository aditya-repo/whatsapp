import LeftPanel from "@/ui/leftPanel";
import RightPanel from "@/ui/rightPanel";


const dashboard: React.FC = () => {
    return (
        <div className="h-screen">

        <div className="flex text-white">
            <div><LeftPanel /></div>
            <div className="flex flex-grow"><RightPanel /></div>
        </div>
        </div>
    )
}

export default dashboard


