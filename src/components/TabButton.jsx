export default function TabButton({children,isSelected,...props}){
   
console.log("tabbutton s clicked");
    return (
    <li>
        <button className={isSelected ? 'active' :undefined}   {...props}>{children}</button>
    </li>
    );
}