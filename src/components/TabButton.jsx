export default function TabButton({children,onSelect,isSelected}){
   
console.log("tabbutton s clicked");
    return (
    <li>
        <button className={isSelected ? 'active' :undefined}   onClick={onSelect}>{children}</button>
    </li>
    );
}