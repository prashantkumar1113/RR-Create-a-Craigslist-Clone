import Help from "./Help";
function Sidebar() {
    return (
        <div className="sideBar">
            <h1>Sidebar</h1>
            <ul>
                <li>search titles only</li>
                <li>has image</li>
                <li>posted today</li>
                <li>bundle duplicates</li>
                <li>include nearby areas</li>
            </ul>
            <Help />
        </div>
    );
}
export default Sidebar;
