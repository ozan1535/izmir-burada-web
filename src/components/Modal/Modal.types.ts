export interface IOpenModal {
  title: string;
  modalContent: string;
}

export interface IModal extends IOpenModal {
  onClick: () => void;
}
