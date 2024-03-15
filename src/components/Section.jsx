export default function Section ({titlle,children,...props}){
    return   (
    <section {...props}>
        <h2> {titlle}</h2>
        {children}
    </section>
    ); 
    
}