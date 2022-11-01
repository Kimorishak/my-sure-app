import { Children } from 'react'
import './Modal.css'
export default function Modal({children, isSalesModal}) {
  return (
    <div className="modal-backdrop">
        <div className="modal" style={{
            border: '3px solid',
            borderColor:isSalesModal ? '#ff4500' : '#555',
            textAlign: 'center'
            }}>
            {children}
            
        </div>
    </div>
  )
}
