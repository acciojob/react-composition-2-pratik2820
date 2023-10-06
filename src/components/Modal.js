
import React from "react";


const Modal = ({modalShow,onClose}) =>{


    return(
        <div>

            {
                modalShow && (
                    <div className="modal-overlay">
        <div className="modal-dialog">
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
          <p className="modal-p">This is the content of the modal.</p>
        </div>
      </div>
                )
            }


        </div>
    )
}

export default Modal;