import React from "react";
import { IModal } from "./Modal.types";

function Modal({ title, modalContent, onClick }: IModal) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
            <h3 className="text-wrap text-xl font-semibold text-gray-900">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="default-modal"
              onClick={onClick}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="max-h-64 overflow-y-scroll p-4 md:p-5 space-y-4">
            <div className="font-normal break-words whitespace-pre-wrap text-gray-800">
              {modalContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

/* 

<div className="max-h-64 overflow-y-scroll overflow-x-hidden p-4 md:p-5 space-y-4 break-words">
            {modalContent}
          </div>
*/

{
  /* <div className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="default-modal"
              onClick={onClick}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="max-h-64 overflow-y-scroll overflow-x-hidden p-4 md:p-5 space-y-4 break-words">
            {modalContent}
          </div>
        </div>
      </div>
    </div> */
}
