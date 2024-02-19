export default function Foote(){
    let datas= new Date();
    let data=datas.getFullYear()
    return(
        <>
            <footer>
        
                <p>Blog Noticias {data} </p>
            </footer>
        </>
    );
}