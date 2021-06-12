import React, {useState} from 'react';

const UseCommonStateHook = (props) => {
  const [openAddPopup, setOpenAddPopup] = useState(false);
  const [openEditPopup, setOpenEditPopup] = useState(false);
  const [openSuccessSnackBar, setOpenSuccessSnackBar] = useState(false);
  const [openErrorSnackBar, setOpenErrorSnackBar] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''})
  const [removeItem, setRemoveItem] = useState(false)
  const [updateItem, setUpdateItem] = useState(false)
  return [
    openAddPopup, setOpenAddPopup,
    openEditPopup, setOpenEditPopup,
    openSuccessSnackBar, setOpenSuccessSnackBar,
    openErrorSnackBar, setOpenErrorSnackBar,
    confirmDialog, setConfirmDialog,
    removeItem, setRemoveItem,
    updateItem, setUpdateItem
  ];
};

export default UseCommonStateHook;