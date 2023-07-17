import React from "react";

export default function Card({ title, discription, img ,web}) {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    {img ? <img className="card-img-top" src={img} alt="no images"></img> :<img className="card-img-top" src="https://images.prismic.io/indiahike/28e4a5e8-4a97-4fa8-999a-057934c277bd_Ranthan+Kharak+Trek_Indiahikes_Nitesh+Kumar_April+2022_Website+resolution_-208.jpg?auto=compress,format" alt="no images"></img>}
                    <p className="card-text">
                        {discription}...
                    </p>
                    <a href={web} target="_blank" className="btn btn-sm btn-primary">
                        View
                    </a>
                </div>
            </div>
        </div>
    );
}
