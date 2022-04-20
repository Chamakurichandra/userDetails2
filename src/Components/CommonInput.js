import React from 'react'

export default function CommonInput({ fields }) {
    return (
        <div>
            {fields && fields.map((field, index) => {
                return (
                    <div className='row'>
                        <div className='col-4'>
                            <div className='float-end'><span className='text-danger'>*</span> {field.name} :</div>
                        </div>
                        <div className='col-8'>
                            <div key={index} style={{ marginBottom: 30 }}>
                                <input type={field.type} value={field.value} onChange={field.onchange} className="w-100 px-1 py-1 rounded border border-secondary"/>
                                {field.err && <p style={{ color: '#FF0016', margin: "0" }}>{field.err}</p>}
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}
