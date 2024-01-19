import DashNav from "@/Components/DashNavbar";
import OutMenuIn from "@/Components/Menu-In-Out";

export default function DashBoard() {
    return (
        <div className="flex flex-col justify-center">
            <DashNav/>
            <OutMenuIn/>
        </div>
    )
}