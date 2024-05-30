import AdminPanel from "../components/Admin/AdminPanel";
import getTours from "../libs/getTours";





export default async function AdminPage() {
    const tours = await getTours()
    return (
        <div>
            <AdminPanel tours={tours} />
        </div>
    )
}


