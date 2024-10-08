import './Header.css';
export default function(){
    return(
        <div>
            <div className="heading">
                <div className="title"><h1>ASIDE</h1></div>
                <div className="search"><input type="search" placeholder='search here'/></div>
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Debug</li>
                        <li>Privacy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}