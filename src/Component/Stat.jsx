import "./Stat.css";
function Stat(props) {
    const { title, value, direction } = props
    return <div className={`stat-container${direction}`}>
        <span className="stat-title">
            {title}
        </span>
        <span>
            {value}
        </span>
    </div>
}

export { Stat } 