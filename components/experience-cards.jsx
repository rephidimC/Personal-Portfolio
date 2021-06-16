function Card(props) {
    return(
        <div className="flex flex-col text-white">
            {props.children}
            <p className="mt-6 text-sm">{props.year}</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-wider mb-8">{props.companyName}</h1>
            <p className="text-xs leading-6">{props.personalNote}</p>
        </div>
    )
}

export default Card