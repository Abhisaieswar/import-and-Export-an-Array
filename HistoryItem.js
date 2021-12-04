import './index.css'

const HistoryItem = () => {
    const {details,deleteItem}=this.props 
    const {id,timeAccessed,logoUrl,title,domainUrl}=details

    <li>
        <h1>{timeAccessed}</h1>
        <img src={logoUrl} alt="domain logo"/>
        <h1>{title}</h1>
        <h1>{domainUrl}</h1>
        <button type="button" id="delete" onClick={deleteItem(id)}><img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete"/></button>
    </li>
}

export default HistoryItem
